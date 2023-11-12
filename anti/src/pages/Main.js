import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Main() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    getUserFeeds();
  }, []);

  function getUserFeeds() {
    axios.get("http://localhost:8080/")
      .then((result) => {
        console.log(result.data);
        setFeeds(result.data);
      })
      .catch((error) => {
        console.error("Error getting user feeds:", error);
      });
  }

  return (
    // <div>
    //     <div className="card">
    //       {feeds.username && <p>User ID: {feeds.username}</p>}
    //       {feeds.BlurImage && <img src={feeds.BlurImage} alt="Blurred" />}
    //       {feeds.text && <p>{feeds.text}</p>}
    //     </div>
    // </div>
    <div className="JourneyJurnalsLandingPage w-[1440px] h-[6300px] relative bg-stone-50">
  <div className="RecentPost w-[1260px] h-[1010.31px] left-[90px] top-[3931px] absolute">
    <div className="Group76 w-[1260px] h-[749.31px] left-0 top-[261px] absolute">
      <div className="Group129 w-[1260px] h-[647px] left-0 top-0 absolute">
        <img className="Image11 w-[380px] h-[283px] left-[448px] top-[1px] absolute" src="https://via.placeholder.com/380x283" />
        <div className="Vector6 w-[378px] h-[283px] left-0 top-0 absolute justify-center items-center inline-flex">
          <img className="Image11 w-[380px] h-[284px]" src="https://via.placeholder.com/380x284" />
        </div>
        <img className="Image11 w-[380px] h-[283px] left-[880px] top-[364px] absolute" src="https://via.placeholder.com/380x283" />
        <img className="Image11 w-[380px] h-[283px] left-[448px] top-[364px] absolute" src="https://via.placeholder.com/380x283" />
        <img className="Image11 w-[380px] h-[283px] left-0 top-[364px] absolute" src="https://via.placeholder.com/380x283" />
        <img className="Image11 w-[380px] h-[283px] left-[880px] top-0 absolute" src="https://via.placeholder.com/380x283" />
      </div>
      <div className="Group53 w-[172.76px] h-[48.31px] left-[544px] top-[701px] absolute">
        <div className="Rectangle19 w-[172.76px] h-[48.31px] left-0 top-0 absolute bg-cyan-600 rounded-lg shadow" />
        <div className=" w-[127px] h-[27px] left-[23px] top-[11px] absolute text-white text-base font-semibold font-['Montserrat'] leading-normal">가입하고 모두 보기</div>
      </div>
    </div>
    <div className="Group112 w-[499px] h-[260.84px] left-[372px] top-0 absolute">
      <div className="OurBlogAndArticles w-[499px] h-[187.93px] left-0 top-[72.92px] absolute text-center text-neutral-700 text-[67px] font-semibold font-['Montserrat'] leading-[72px]">Our Blog and Articles</div>
      <div className="JourneyJournal w-[232px] h-[41.76px] left-[133px] top-0 absolute text-center text-cyan-600 text-[28px] font-semibold font-['Montserrat'] leading-loose">Journey Journal</div>
    </div>
  </div>
  <div className="Product w-[1241px] h-[587.49px] left-[99px] top-[3053px] absolute">
    <div className="Destinations w-[1027px] h-[326.49px] left-[106px] top-[261px] absolute">
      <div className="Indonesia w-[286px] h-[326.49px] left-[741px] top-0 absolute">
        <img className="Rectangle14 w-[286px] h-[189px] left-0 top-0 absolute rounded-[15px]" src="https://via.placeholder.com/286x189" />
        <div className="Ai w-[264px] left-0 top-[264px] absolute text-neutral-700 text-[21px] font-semibold font-['Montserrat'] leading-normal">수성AI법률전문 상담소</div>
        <div className="Group36 w-[129px] h-2.5 left-0 top-[230px] absolute">
          <div className="Group12 w-[8.62px] h-2.5 left-0 top-0 absolute">
          </div>
          <div className=" w-28 h-[9px] left-[17px] top-[1px] absolute text-neutral-400 text-opacity-60 text-xs font-normal font-['Inter'] capitalize">수성구, 대구광역시</div>
        </div>
        <div className="Group31 w-[125.67px] h-[21.49px] left-0 top-[305px] absolute">
        </div>
      </div>
      <div className="France w-[291px] h-[326.49px] left-[365px] top-0 absolute">
        <img className="Rectangle13 w-[286px] h-[189px] left-[5px] top-0 absolute rounded-[15px]" src="https://via.placeholder.com/286x189" />
        <div className=" w-[174px] left-0 top-[266px] absolute text-neutral-700 text-[21px] font-semibold font-['Montserrat'] leading-normal">달서법률상담소</div>
        <div className="Group35 w-[161px] h-2.5 left-[5px] top-[232px] absolute">
          <div className="Group11 w-[8.62px] h-2.5 left-0 top-0 absolute">
          </div>
          <div className=" w-[142px] h-[9px] left-[19px] top-[1px] absolute text-neutral-400 text-opacity-60 text-xs font-normal font-['Inter'] capitalize">달서구, 대구광역시</div>
        </div>
        <div className="Group32 w-[125.67px] h-[21.49px] left-[11px] top-[305px] absolute">
        </div>
      </div>
      <div className="Spain w-[286px] h-[326.49px] left-0 top-0 absolute">
        <img className="Rectangle12 w-[286px] h-[189px] left-0 top-0 absolute rounded-[15px]" src="https://via.placeholder.com/286x189" />
        <div className=" w-[269px] left-0 top-[266px] absolute text-neutral-700 text-[21px] font-semibold font-['Montserrat'] leading-normal">대구 법률사무소</div>
        <div className="Group34 w-[129px] h-[13px] left-0 top-[236px] absolute">
          <div className="Group10 w-[8.62px] h-2.5 left-0 top-[3px] absolute">
          </div>
          <div className=" w-[115px] h-2.5 left-[14px] top-0 absolute text-neutral-400 text-opacity-60 text-xs font-normal font-['Inter'] capitalize">중구, 대구광역시</div>
        </div>
        <div className="Group33 w-[125.67px] h-[21.49px] left-0 top-[305px] absolute">
        </div>
      </div>
    </div>
    <div className="Group41 w-[50px] h-[50px] left-[1191px] top-[437px] absolute">
      <div className="Rectangle15 w-[50px] h-[50px] left-0 top-0 absolute bg-cyan-600 rounded-[15px] shadow" />
    </div>
    <div className="Group42 w-[50px] h-[50px] left-0 top-[437px] absolute">
      <div className="Rectangle16 w-[50px] h-[50px] left-0 top-0 absolute bg-cyan-600 rounded-[15px] shadow" />
    </div>
    <div className="Group113 w-[1177px] h-[207px] left-[26px] top-0 absolute">
      <div className="ExploringTheMostPopularGemsAroundTheGlobe w-[1061px] left-[60px] top-[53px] absolute text-center text-neutral-700 text-[67px] font-semibold font-['Montserrat'] leading-[72px]">AI 전문 법률 상담소</div>
      <div className=" w-[1177px] h-[53px] left-0 top-0 absolute text-center text-cyan-600 text-[28px] font-semibold font-['Montserrat'] leading-loose">법적 권리 보호</div>
      <div className="Ai w-[929px] h-[62px] left-[195px] top-[145px] absolute text-zinc-500 text-base font-normal font-['Lato'] leading-normal">소송 중이거나 법적 문제에 대한 도움이 필요하신가요? 우리는 AI와 관련된 법률 문제에 특화된 전문 법률 상담소와 제휴하고 있습니다. <br/>언제든지 상담을 통해 도움을 받을 수 있습니다. 여러분의 권리를 지키기 위해 우리와 함께하세요.</div>
    </div>
  </div>
  <div className="RecentPost w-[1212px] h-[783px] left-[114px] top-[1979px] absolute">
    <div className="Group76 w-[1212px] h-[495px] left-0 top-[288px] absolute">
      <div className="Group63 w-[579px] h-[216px] left-0 top-0 absolute">
        <div className="Group116 w-[579px] h-[216px] left-0 top-0 absolute">
          <img className="Image11 w-[287px] h-[216px] left-0 top-0 absolute" src="https://via.placeholder.com/287x216" />
          <div className="Insight w-[91.77px] h-[19px] left-[304px] top-0 absolute text-cyan-600 text-base font-semibold font-['Montserrat'] leading-normal">Insight</div>
          <div className="ExploringTheRichHeritageOfIndonesia w-[277px] h-[57px] left-[302px] top-[41px] absolute text-neutral-700 text-[21px] font-semibold font-['Montserrat'] leading-normal">Exploring the Rich Heritage of Indonesia</div>
        </div>
        <div className="LiEuropanLinguesEsMembresDelSamLorSeparatExistentieEsUnMyth w-[275px] h-[45px] left-[304px] top-[108px] absolute text-zinc-500 text-base font-normal font-['Lato'] leading-normal">Li Europan lingues es membres del sam  lor separat existentie es un myth...</div>
      </div>
      <div className="Group63 w-[581px] h-[216px] left-[627px] top-0 absolute">
        <div className="Group116 w-[581px] h-[216px] left-0 top-0 absolute">
          <img className="Image11 w-[287px] h-[216px] left-0 top-0 absolute" src="https://via.placeholder.com/287x216" />
          <div className="Group117 w-[277px] h-[98px] left-[304px] top-0 absolute">
            <div className="Insight w-[91.77px] h-[19px] left-0 top-0 absolute text-cyan-600 text-base font-semibold font-['Montserrat'] leading-normal">Insight</div>
            <div className="ExploringTheRichHeritageOfIndonesia w-[277px] h-[57px] left-0 top-[41px] absolute text-neutral-700 text-[21px] font-semibold font-['Montserrat'] leading-normal">Exploring the Rich Heritage of Indonesia</div>
          </div>
        </div>
        <div className="LiEuropanLinguesEsMembresDelSamLorSeparatExistentieEsUnMyth w-[277px] h-[45px] left-[304px] top-[108px] absolute text-zinc-500 text-base font-normal font-['Lato'] leading-normal">Li Europan lingues es membres del sam  lor separat existentie es un myth...</div>
      </div>
      <div className="Group129 w-[1212px] h-[216px] left-0 top-[279px] absolute">
        <div className="Group63 w-[585px] h-[216px] left-[627px] top-0 absolute">
          <div className="Group116 w-[585px] h-[216px] left-0 top-0 absolute">
            <img className="Image11 w-[287px] h-[216px] left-0 top-0 absolute" src="https://via.placeholder.com/287x216" />
            <div className="Group117 w-[281px] h-[98px] left-[304px] top-0 absolute">
              <div className="Insight w-[91.77px] h-[19px] left-0 top-0 absolute text-cyan-600 text-base font-semibold font-['Montserrat'] leading-normal">Insight</div>
              <div className="ExploringTheWorldOneAdventureAtATime w-[281px] h-[57px] left-0 top-[41px] absolute text-neutral-700 text-[21px] font-semibold font-['Montserrat'] leading-normal">Exploring the World, One Adventure at a Time</div>
            </div>
          </div>
          <div className="LiEuropanLinguesEsMembresDelSamLorSeparatExistentieEsUnMyth w-[277px] h-[45px] left-[304px] top-[108px] absolute text-zinc-500 text-base font-normal font-['Lato'] leading-normal">Li Europan lingues es membres del sam  lor separat existentie es un myth...</div>
        </div>
        <div className="Group122 w-[581px] h-[216px] left-[627px] top-0 absolute">
          <div className="Group116 w-[395.77px] h-[216px] left-0 top-0 absolute">
            <img className="Image11 w-[287px] h-[216px] left-0 top-0 absolute" src="https://via.placeholder.com/287x216" />
            <div className="Insight w-[91.77px] h-[19px] left-[304px] top-0 absolute text-cyan-600 text-base font-semibold font-['Montserrat'] leading-normal">Insight</div>
          </div>
          <div className="LiEuropanLinguesEsMembresDelSamLorSeparatExistentieEsUnMyth w-[277px] h-[45px] left-[304px] top-[108px] absolute text-zinc-500 text-base font-normal font-['Lato'] leading-normal">Li Europan lingues es membres del sam  lor separat existentie es un myth...</div>
        </div>
        <div className="Group123 w-[581px] h-[216px] left-0 top-0 absolute">
          <div className="Group116 w-[581px] h-[216px] left-0 top-0 absolute">
            <img className="Image11 w-[287px] h-[216px] left-0 top-0 absolute" src="https://via.placeholder.com/287x216" />
            <div className="Group117 w-[277px] h-[98px] left-[304px] top-0 absolute">
              <div className="Insight w-[91.77px] h-[19px] left-0 top-0 absolute text-cyan-600 text-base font-semibold font-['Montserrat'] leading-normal">Insight</div>
              <div className="UnveilingTheAncientWondersOfEgypt w-[277px] h-[57px] left-0 top-[41px] absolute text-neutral-700 text-[21px] font-semibold font-['Montserrat'] leading-normal">Unveiling the Ancient Wonders of Egypt</div>
            </div>
          </div>
          <div className="LiEuropanLinguesEsMembresDelSamLorSeparatExistentieEsUnMyth w-[277px] h-[45px] left-[304px] top-[108px] absolute text-zinc-500 text-base font-normal font-['Lato'] leading-normal">Li Europan lingues es membres del sam  lor separat existentie es un myth...</div>
        </div>
      </div>
    </div>
    <div className="Group112 w-[929px] h-[262px] left-[189px] top-0 absolute">
      <div className="Group69 w-[929px] h-[219px] left-0 top-[43px] absolute">
        <div className="OurBlogAndArticles w-[499px] left-[152px] top-0 absolute text-center text-neutral-700 text-[67px] font-semibold font-['Montserrat'] leading-[72px]">Our Blog and Articles</div>
        <div className="Ai w-[929px] h-[62px] left-0 top-[157px] absolute text-center text-zinc-500 text-base font-normal font-['Lato'] leading-normal">소송 중이거나 법적 문제에 대한 도움이 필요하신가요? 우리는 AI와 관련된 법률 문제에 특화된 전문 법률 상담소와 제휴하고 있습니다. <br/>언제든지 상담을 통해 도움을 받을 수 있습니다. 여러분의 권리를 지키기 위해 우리와 함께하세요.</div>
      </div>
      <div className="JourneyJournal left-[298px] top-0 absolute text-center text-cyan-600 text-[28px] font-semibold font-['Montserrat'] leading-loose">Journey Journal</div>
    </div>
  </div>
  <div className="AboutUs w-[1221px] h-[516px] left-[122px] top-[1172px] absolute">
    <div className="DiscoverOurStory w-[468px] left-[743px] top-[113px] absolute text-neutral-700 text-[67px] font-semibold font-['Montserrat'] leading-[72px]">창작의 자유,<br/>안전한 여정으로</div>
    <div className="AboutUs left-[772px] top-[55px] absolute text-cyan-600 text-[28px] font-semibold font-['Montserrat'] leading-loose">About Us</div>
    <div className="Ai w-[449px] h-[116px] left-[772px] top-[283px] absolute text-zinc-500 text-base font-normal font-['Lato'] leading-normal">당신의 창작물을 무단으로 수집하는 AI로부터 보호받으세요. 우리의 강력한 무단크롤링 방지 기술과 알고리즘이 창작자들을 안전하게 지켜드립니다. 여러분의 아이디어와 작품은 여기서 안전하게 보호됩니다.</div>
    <img className="Rectangle9 w-[394px] h-[516px] left-0 top-0 absolute rounded-[15px] shadow" src="https://via.placeholder.com/394x516" />
    <img className="Rectangle10 w-[259px] h-[453px] left-[435px] top-[31px] absolute rounded-[15px] shadow" src="https://via.placeholder.com/259x453" />
  </div>
  <div className="HeroHeader w-[1440px] h-[881px] left-0 top-0 absolute">
    <img className="Image2 w-[1440px] h-[881px] left-0 top-0 absolute" src="https://via.placeholder.com/1440x881" />
    <div className="Image1 w-[1440px] h-[881px] left-0 top-0 absolute bg-black bg-opacity-30" />
    <div className=" w-[762px] h-[102.95px] left-[339px] top-[279.15px] absolute text-center text-white text-[90px] font-semibold font-['Montserrat'] leading-[104px]">창작자들을 위해</div>
    <div className="Component1 w-[388.55px] h-[51.47px] left-[526px] top-[498px] absolute justify-center items-start gap-[102.55px] inline-flex">
      <div className="Button w-[143px] h-[51.47px] relative">
        <div className="Rectangle6 w-[143px] h-[51.47px] left-0 top-0 absolute bg-stone-900 rounded-[15px]" />
        <div className=" w-[69px] h-[16.83px] left-[37.14px] top-[17.82px] absolute text-white text-sm font-bold font-['Montserrat']">더 알아보기</div>
      </div>
      <div className="Button w-[143px] h-[51.47px] relative">
        <div className="Rectangle6 w-[143px] h-[51.47px] left-0 top-0 absolute bg-white rounded-[15px]" />
        <div className=" w-[82px] h-[16.83px] left-[30.45px] top-[17.82px] absolute text-stone-900 text-sm font-bold font-['Montserrat']">지금 시작하기</div>
      </div>
    </div>
    <div className="Anti w-[706px] h-[23.76px] left-[367px] top-[422px] absolute text-center text-white text-base font-normal font-['Lato'] leading-normal">'AntI'는 모든 창작자를 보호하고, 창작물의 무단 사용을 금지합니다.</div>
  </div>
  <div className="PriceList w-[1238px] h-[754px] left-[101px] top-[5232px] absolute">
    <div className="Pricelist w-[1238px] h-[502px] left-0 top-[252px] absolute">
      <div className="Package1 w-[326.84px] h-[502px] left-[74.77px] top-0 absolute">
        <div className="Rectangle17 w-[326.84px] h-[502px] left-0 top-0 absolute bg-white rounded-lg shadow" />
        <div className="For2People w-[132px] h-[17px] left-[50.23px] top-[133px] absolute text-neutral-400 text-opacity-90 text-base font-normal font-['Lato'] capitalize">For 2 people</div>
        <div className="TourGuide w-[115px] h-[21px] left-[90.23px] top-[197px] absolute text-neutral-700 text-base font-normal font-['Lato'] leading-normal">Tour Guide</div>
        <div className="HotelAccomodation w-40 h-[21px] left-[90.23px] top-[233px] absolute text-neutral-700 text-base font-normal font-['Lato'] leading-normal">Hotel accomodation</div>
        <div className="SpecialDinner w-[130px] h-[17px] left-[90.23px] top-[267px] absolute text-neutral-700 text-base font-normal font-['Lato'] leading-normal">Special dinner</div>
        <div className="SpeedboatAndYachts w-[161px] h-[17px] left-[89.23px] top-[301px] absolute text-neutral-700 text-base font-normal font-['Lato'] leading-normal">Speedboat and yachts</div>
        <div className="Refundable w-[131px] h-[17px] left-[89.23px] top-[335px] absolute text-neutral-400 text-opacity-90 text-base font-normal font-['Lato'] leading-normal">Refundable</div>
        <div className="BonusAndGifts w-[131px] h-[17px] left-[89.23px] top-[369px] absolute text-neutral-400 text-opacity-90 text-base font-normal font-['Lato'] leading-normal">Bonus and gifts</div>
        <div className="Packages1 w-[147.17px] h-[21.67px] left-[50.24px] top-[46.05px] absolute text-neutral-700 text-[21px] font-semibold font-['Montserrat'] leading-normal">Packages 1</div>
        <div className=" w-[129px] h-[45px] left-[47.23px] top-[88px] absolute text-cyan-600 text-4xl font-bold font-['Lato'] uppercase">무료?</div>
        <div className="Group47 w-[18.06px] h-[18.06px] left-[50.24px] top-[200px] absolute">
        </div>
        <div className="Group48 w-[18.06px] h-[18.06px] left-[50.24px] top-[235px] absolute">
        </div>
        <div className="Group49 w-[18.06px] h-[18.06px] left-[50.24px] top-[269.06px] absolute">
        </div>
        <div className="Group50 w-[18.06px] h-[18.06px] left-[50.24px] top-[303.37px] absolute">
        </div>
        <div className="Group51 w-[18.06px] h-[18.06px] left-[50.24px] top-[337.68px] absolute">
        </div>
        <div className="Group52 w-[18.06px] h-[18.06px] left-[50.24px] top-[371.99px] absolute">
        </div>
        <div className="Rectangle19 w-[176.96px] h-[37.02px] left-[64.69px] top-[421.64px] absolute bg-cyan-600 rounded-lg shadow" />
        <div className="Group53 w-[127.31px] h-[17.15px] left-[89.06px] top-[431.58px] absolute">
          <div className="ChoosePackage w-[104.73px] h-[17.15px] left-0 top-0 absolute text-white text-sm font-semibold font-['Lato'] capitalize">Choose Package</div>
        </div>
      </div>
      <div className="Package2 w-[326.84px] h-[502px] left-[456px] top-0 absolute">
        <div className="Rectangle17 w-[326.84px] h-[502px] left-0 top-0 absolute bg-white rounded-lg shadow" />
        <div className="For24People w-[143px] h-[17px] left-[44.54px] top-[133px] absolute text-neutral-400 text-opacity-90 text-base font-normal font-['Lato'] capitalize">For 2-4 people</div>
        <div className="TourGuide w-[104px] h-[17px] left-[84px] top-[200px] absolute text-neutral-700 text-base font-normal font-['Lato'] leading-normal">Tour Guide</div>
        <div className="HotelAccomodation w-[170px] h-[17px] left-[84px] top-[235px] absolute text-neutral-700 text-base font-normal font-['Lato'] leading-normal">Hotel accomodation</div>
        <div className="SpecialDinner w-[135px] h-[17px] left-[84px] top-[269px] absolute text-neutral-700 text-base font-normal font-['Lato'] leading-normal">Special dinner</div>
        <div className="SpeedboatAndYachts w-[180px] h-[17px] left-[84px] top-[303px] absolute text-neutral-700 text-base font-normal font-['Lato'] leading-normal">Speedboat and yachts</div>
        <div className="Refundable w-[104px] h-[17px] left-[84px] top-[338px] absolute text-neutral-700 text-base font-normal font-['Lato'] leading-normal">Refundable</div>
        <div className="BonusAndGifts w-[135px] h-[17px] left-[84px] top-[372px] absolute text-neutral-400 text-opacity-90 text-base font-normal font-['Lato'] leading-normal">Bonus and gifts</div>
        <div className="Packages2 w-[147.17px] h-[21.67px] left-[44.24px] top-[46.05px] absolute text-neutral-700 text-[21px] font-semibold font-['Montserrat'] leading-normal">Packages 2</div>
        <div className="499 w-[95.71px] h-[38.82px] left-[44.24px] top-[88px] absolute text-cyan-600 text-4xl font-bold font-['Lato'] uppercase">$499</div>
        <div className="Group47 w-[18.06px] h-[18.06px] left-[44.24px] top-[200.44px] absolute">
        </div>
        <div className="Group48 w-[18.06px] h-[18.06px] left-[44.24px] top-[234.75px] absolute">
        </div>
        <div className="Group49 w-[18.06px] h-[18.06px] left-[44.24px] top-[269.06px] absolute">
        </div>
        <div className="Group50 w-[18.06px] h-[18.06px] left-[44.24px] top-[303.37px] absolute">
        </div>
        <div className="Group51 w-[18.06px] h-[18.06px] left-[44.24px] top-[337.68px] absolute">
        </div>
        <div className="Group52 w-[18.06px] h-[18.06px] left-[44.24px] top-[371.99px] absolute">
        </div>
        <div className="Rectangle19 w-[176.96px] h-[37.02px] left-[58.69px] top-[421.64px] absolute bg-cyan-600 rounded-lg shadow" />
        <div className="Group53 w-[127.31px] h-[17.15px] left-[83.06px] top-[431.58px] absolute">
          <div className="ChoosePackage w-[104.73px] h-[17.15px] left-0 top-0 absolute text-white text-sm font-semibold font-['Lato'] capitalize">Choose Package</div>
        </div>
      </div>
      <div className="Package3 w-[326.84px] h-[502px] left-[830.16px] top-0 absolute">
        <div className="Rectangle17 w-[326.84px] h-[502px] left-0 top-0 absolute bg-cyan-600 rounded-lg shadow" />
        <div className="Custom w-[87px] h-[17px] left-[43.84px] top-[133px] absolute text-white text-base font-normal font-['Lato'] capitalize">Custom</div>
        <div className="TourGuide w-[116px] h-[17px] left-[83.84px] top-[196px] absolute text-white text-base font-normal font-['Lato'] leading-normal">Tour Guide</div>
        <div className="HotelAccomodation w-[164px] h-[17px] left-[83.84px] top-[231px] absolute text-white text-base font-normal font-['Lato'] leading-normal">Hotel accomodation</div>
        <div className="SpecialDinner w-36 h-[17px] left-[83.84px] top-[265px] absolute text-white text-base font-normal font-['Lato'] leading-normal">Special dinner</div>
        <div className="SpeedboatAndYachts w-[177px] h-[17px] left-[82.84px] top-[299px] absolute text-white text-base font-normal font-['Lato'] leading-normal">Speedboat and yachts</div>
        <div className="Refundable w-[122px] h-2.5 left-[82.84px] top-[334px] absolute text-white text-base font-normal font-['Lato'] leading-normal">Refundable</div>
        <div className="BonusAndGifts w-[153px] h-[17px] left-[82.84px] top-[368px] absolute text-white text-base font-normal font-['Lato'] leading-normal">Bonus and gifts</div>
        <div className="Packages3 w-[147.17px] h-[21.67px] left-[44.24px] top-[46.05px] absolute text-white text-[21px] font-semibold font-['Montserrat'] leading-normal">Packages 3</div>
        <div className="599 w-[95.71px] h-[38.82px] left-[44.24px] top-[88px] absolute text-white text-4xl font-bold font-['Lato'] uppercase">$599</div>
        <div className="Group47 w-[18.06px] h-[18.06px] left-[44.24px] top-[200.44px] absolute">
        </div>
        <div className="Group48 w-[18.06px] h-[18.06px] left-[44.24px] top-[234.75px] absolute">
        </div>
        <div className="Group49 w-[18.06px] h-[18.06px] left-[44.24px] top-[269.06px] absolute">
        </div>
        <div className="Group50 w-[18.06px] h-[18.06px] left-[44.24px] top-[303.37px] absolute">
        </div>
        <div className="Group51 w-[18.06px] h-[18.06px] left-[44.24px] top-[337.68px] absolute">
        </div>
        <div className="Group52 w-[18.06px] h-[18.06px] left-[44.24px] top-[371.99px] absolute">
        </div>
        <div className="Rectangle19 w-[176.96px] h-[37.02px] left-[58.69px] top-[421.64px] absolute bg-white rounded-lg shadow" />
        <div className="Group53 w-[125.32px] h-[17.15px] left-[78.84px] top-[431.58px] absolute">
          <div className="ChoosePackage w-[119.11px] h-[17.15px] left-0 top-0 absolute text-neutral-700 text-sm font-semibold font-['Lato'] capitalize">Choose Package</div>
        </div>
      </div>
      <div className="Group41 w-[50px] h-[50px] left-[1188px] top-[231px] absolute">
        <div className="Rectangle15 w-[50px] h-[50px] left-0 top-0 absolute bg-cyan-600 rounded-[15px] shadow" />
      </div>
      <div className="Group42 w-[50px] h-[50px] left-0 top-[231px] absolute">
        <div className="Rectangle16 w-[50px] h-[50px] left-0 top-0 absolute bg-cyan-600 rounded-[15px] shadow" />
      </div>
    </div>
    <div className="Tittle w-[879px] h-[188px] left-[187px] top-0 absolute">
      <div className="RevealingOurAmazingTravelPackages w-[879px] left-0 top-[44px] absolute text-center text-neutral-700 text-[67px] font-semibold font-['Montserrat'] leading-[72px]">Revealing Our Amazing Travel Packages</div>
      <div className="CustomizedExperiences left-[262px] top-0 absolute text-center text-cyan-600 text-[28px] font-semibold font-['Montserrat'] leading-loose">Customized Experiences</div>
    </div>
  </div>
</div>

  );
}
