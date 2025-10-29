import React from "react";
import { PersonelData } from "@/models/personel.data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const Education = () => {
  const courses = [
    "Veri Yapıları",
    "Algoritma Analizi",
    "Veritabanı Yönetimi",
    "Web Programlama",
    "Yazılım Mühendisliği",
    "Sistem Analizi",
  ];

  return (
    <section className="py-16" id="education">
      <div className="container mx-auto px-4">
        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl lg:text-4xl font-bold tracking-tight">
              Education
            </CardTitle>
            <Separator className="mx-auto w-20 mt-4" />
          </CardHeader>

          <CardContent className="space-y-6">
            <Card className=" border-border/50">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {PersonelData.university}
                    </h3>
                    <p className="text-primary font-medium mt-1">
                      Yönetim Bilişim Sistemleri
                    </p>
                  </div>
                  <Badge variant="secondary" className="flex-shrink-0">
                    {PersonelData.universityYear}
                  </Badge>
                </div>

                <Separator className="my-4" />

                <p className="text-muted-foreground leading-relaxed">
                  Anadolu Üniversitesi&apos;nde Yönetim Bilişim Sistemleri
                  alanında eğitimime devam ediyorum. Teorik bilgileri pratik
                  projelerle destekleyerek kendimi sürekli geliştiriyorum.
                </p>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold mb-3">
                    İlgili Dersler:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {courses.map((course, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
