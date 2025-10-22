import React from "react";
import { PersonelData } from "@/models/personel.data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const Education = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl lg:text-4xl font-bold tracking-tight">
              Eğitim
            </CardTitle>
            <Separator className="mx-auto w-20 mt-4" />
          </CardHeader>

          <CardContent>
            <div className="flex flex-col items-center space-y-6">
              <div className="relative w-full max-w-2xl">
                <Card className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border-l-4 border-l-white">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">
                          {PersonelData.university}
                        </h3>
                        <p className="text-muted-foreground">
                          Yönetim Bilişim Sistemleri
                        </p>
                      </div>

                      <div className="flex flex-col items-start lg:items-end gap-2">
                        <Badge variant="secondary" className="text-sm">
                          {PersonelData.universityYear}
                        </Badge>
                        <Badge variant="outline">Lisans Derecesi</Badge>
                      </div>
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-3">
                      <h4 className="font-medium">İlgili Dersler:</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs">
                          Veri Yapıları
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Algoritma Analizi
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Veritabanı Yönetimi
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Web Programlama
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Yazılım Mühendisliği
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          Sistem Analizi
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center space-y-2">
                <p className="text-muted-foreground">
                  Anadolu Üniversitesi&apos;nde Yönetim Bilişim Sistemleri
                  alanında eğitimime devam ediyorum.
                </p>
                <p className="text-sm text-muted-foreground">
                  Teorik bilgileri pratik projelerle destekleyerek kendimi
                  sürekli geliştiriyorum.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
