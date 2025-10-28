# Stage 1: Dependencies
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Sadece bağımlılıkları yüklemek için gerekli dosyaları kopyala
COPY package.json package-lock.json ./
RUN npm ci

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app

# Bağımlılıkları önceki stage'den kopyala
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js telemetry'yi devre dışı bırak
ENV NEXT_TELEMETRY_DISABLED=1

# Production build
RUN npm run build

# Stage 3: Runner (Production)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Güvenlik için non-root user oluştur
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Public dosyaları kopyala
COPY --from=builder /app/public ./public

# Standalone build'i kullan (daha küçük image)
# Not: next.config.mjs'de output: 'standalone' ayarı gerekli
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]

