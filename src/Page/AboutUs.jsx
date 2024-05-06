import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full md:pt-20 border-t">
      <div className="container w-full md:max-w-7xl  m-auto md:px-4 md:py-4 px-5 py-10">
        <h1 className="md:font-semibold font-medium md:mt-0 mt-8 text-3xl md:text-4xl">
          Kompaniya haqida
        </h1>
        <img
          src="https://maxway.uz/_next/image?url=%2Fimages%2Fabout.png&w=1920&q=75"
          alt="igm"
          className="rounded-xl w-full mt-5 mb-5"
        />
        <div className="md:w-[68%]">
          <h1 className=" md:text-[17px] text-gray-600 text-sm">
            Kompaniya 2005 yilning fevral oyida Toshkent shahrida tashkil
            etilgan. Hozirda kompaniyaning Toshkent shahrida 18 ta filiali
            mavjud. <br /> Taomnoma asosan klаb sendvichlari, hot-doglar,
            burgerlar, lavashlar va donarlardan iborat. Bizning ustuvor
            yo'nalishlarimiz - ingredientlarning yangiligi va sifati,
            qo'shimchalarning xilma-xilligi, arzon narxlar va mehmonlarning
            takliflariga e'tibor. <br />
            Har kuni turli xil odamlar MaxWay-dan buyurtma berishadi. Biz esa
            tashrif buyuruvchilar sonini ham, filiallar sonini ham oshirishga
            harakat qilmoqdamiz. Har bir tayyorlangan taom bilan biz o'ziga xos
            retseptlarning tafsilotlarini aniqlaymiz va sizning sevimli
            brendingiz bo'lishda davom etish uchun narx va sifatning mukammal
            muvozanatini qidiramiz. <br /> Agar siz kutilmaganda biz tomondan
            yomon xizmat yoki past sifatli pishirilgan taomga duch kelsangiz,
            bizga
            <a
              href="https://t.me/maxwaymasterfood_bot"
              className="text-blue-600"
            >
              @maxwaymasterfood_bot
            </a>{" "}
            manziliga murojaat qiling. Biz ijobiy va salbiy fikr-mulohazalarni
            mamnuniyat bilan qabul qilamiz. Mehmonning shikoyati - bu sovg'a, bu
            tufayli bizda o'sish uchun maqsad bo’ladi.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
