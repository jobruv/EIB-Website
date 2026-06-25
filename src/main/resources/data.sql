--associations
INSERT INTO association (association_name) VALUES('DEMİR'),('DERİ'),('HUBUBAT'),('KONF'),('KURU MEYVE'),('MADEN'),('MOB. KAĞIT'),('SU ÜRÜN.'),('TEKSTİL'),('TÜTÜN'),('YAŞ MEYVE'),('ZEYTİN');
--categories
INSERT INTO category (category_name) VALUES('Aylık Sektörel Değerlendirme'),('Basın Duyurusu'),('DEİK İş Formu'),('Devlet Destekleri'),('Eğitim/Seminer'),('Fuar ve Heyet'),('Genel Duyuru'),('Görüş Talebi'),('İhale Duyurusu'),('İstatistik'),('Mevzuat'),('Sektörel Duyuru'),('Sınırda Karbon Düzenleme Mekanizması'),('Toplantı'),('Webinar'),('Yurtdışı Alım Talebi');

--announcements
INSERT INTO announcements (title, description, association_id, category_id,photo_url,moreInfo) VALUES ('Test Başlık','Demir için aylık sektörel duyuru falan filan',1,1,'https://images.pexels.com/photos/8428059/pexels-photo-8428059.jpeg?auto=compress&cs=tinysrgb&w=1400','www.google.com'),
('Deri Başlık','Deri için Basın Duyurusu büyük açıklama lallalalalalallalalalalal hiihi haha hoho',2,2,'https://images.pexels.com/photos/7698796/pexels-photo-7698796.jpeg','www.bing.com'),
('Hububat Başlık','Hububat DEİK İş formu kocaman yazı buralara oradan oraya lorem ipsum dolor sit amet :D',3,3,'https://images.pexels.com/photos/9068367/pexels-photo-9068367.jpeg','www.youtube.com'),
('KONF Başlık','Devlet destekleri Konf olan açıklama loremipsumdolorsitametayrancokguzel',4,4,'https://images.pexels.com/photos/4175028/pexels-photo-4175028.jpeg','https://www.linuxfoundation.org/');