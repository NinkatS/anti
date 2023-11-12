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
    /*<main className="JourneyJurnalsLandingPage w-[1440px] h-[6300px] relative bg-stone-50">

  <pic_list className="RecentPost w-[1260px] h-[1010.31px] left-[90px] top-[3931px] absolute">
    <div className="Group76 w-[1260px] h-[749.31px] left-0 top-[261px] absolute">
      
      <pictable className="Group129 w-[1260px] h-[647px] left-0 top-0 absolute">
        <img className="Image11 w-[380px] h-[283px] left-[448px] top-[1px] absolute" src="https://via.placeholder.com/380x283" />
        <div className="Vector6 w-[378px] h-[283px] left-0 top-0 absolute justify-center items-center inline-flex">
          <img className="Image11 w-[380px] h-[284px]" src="https://via.placeholder.com/380x284" />
        </div>
        <img className="Image11 w-[380px] h-[283px] left-[880px] top-[364px] absolute" src="https://via.placeholder.com/380x283" />
        <img className="Image11 w-[380px] h-[283px] left-[448px] top-[364px] absolute" src="https://via.placeholder.com/380x283" />
        <img className="Image11 w-[380px] h-[283px] left-0 top-[364px] absolute" src="https://via.placeholder.com/380x283" />
        <img className="Image11 w-[380px] h-[283px] left-[880px] top-0 absolute" src="https://via.placeholder.com/380x283" />
      </pictable>

      <registerbutton className="Group53 w-[172.76px] h-[48.31px] left-[544px] top-[701px] absolute">
        <div className="Rectangle19 w-[172.76px] h-[48.31px] left-0 top-0 absolute bg-cyan-600 rounded-lg shadow" />
        <div className=" w-[127px] h-[27px] left-[23px] top-[11px] absolute text-white text-base font-semibold font-['Montserrat'] leading-normal">??????? ??? ????</div>
      </registerbutton>

    </div>

    <pic_list_title className="Group112 w-[499px] h-[260.84px] left-[372px] top-0 absolute">
      <div className="OurBlogAndArticles w-[499px] h-[187.93px] left-0 top-[72.92px] absolute text-center text-neutral-700 text-[67px] font-semibold font-['Montserrat'] leading-[72px]">Our Blog and Articles</div>
      <div className="JourneyJournal w-[232px] h-[41.76px] left-[133px] top-0 absolute text-center text-cyan-600 text-[28px] font-semibold font-['Montserrat'] leading-loose">Journey Journal</div>
    </pic_list_title>

  </pic_list>

  <law className="Product w-[1241px] h-[587.49px] left-[99px] top-[3053px] absolute">

    <lawcenter className="Destinations w-[1027px] h-[326.49px] left-[106px] top-[261px] absolute">
      
      <daegu className="Indonesia w-[286px] h-[326.49px] left-[741px] top-0 absolute">
        <img className="Rectangle14 w-[286px] h-[189px] left-0 top-0 absolute rounded-[15px]" src="https://via.placeholder.com/286x189" />
        <div className="Ai w-[264px] left-0 top-[264px] absolute text-neutral-700 text-[21px] font-semibold font-['Montserrat'] leading-normal">????AI???????? ????</div>
        <div className="Group36 w-[129px] h-2.5 left-0 top-[230px] absolute">
          <div className="Group12 w-[8.62px] h-2.5 left-0 top-0 absolute">
          </div>
          <div className=" w-28 h-[9px] left-[17px] top-[1px] absolute text-neutral-400 text-opacity-60 text-xs font-normal font-['Inter'] capitalize">??????, ?“ž??????</div>
        </div>
        <div className="Group31 w-[125.67px] h-[21.49px] left-0 top-[305px] absolute">
        </div>
      </daegu>

      <dalseo className="France w-[291px] h-[326.49px] left-[365px] top-0 absolute">
        <img className="Rectangle13 w-[286px] h-[189px] left-[5px] top-0 absolute rounded-[15px]" src="https://via.placeholder.com/286x189" />
        <div className=" w-[174px] left-0 top-[266px] absolute text-neutral-700 text-[21px] font-semibold font-['Montserrat'] leading-normal">???????????</div>
        <div className="Group35 w-[161px] h-2.5 left-[5px] top-[232px] absolute">
          <div className="Group11 w-[8.62px] h-2.5 left-0 top-0 absolute">
          </div>
          <div className=" w-[142px] h-[9px] left-[19px] top-[1px] absolute text-neutral-400 text-opacity-60 text-xs font-normal font-['Inter'] capitalize">?????, ?“ž??????</div>
        </div>
        <div className="Group32 w-[125.67px] h-[21.49px] left-[11px] top-[305px] absolute">
        </div>
      </dalseo>

      <susung className="Spain w-[286px] h-[326.49px] left-0 top-0 absolute">
        <img className="Rectangle12 w-[286px] h-[189px] left-0 top-0 absolute rounded-[15px]" src="https://via.placeholder.com/286x189" />
        <div className=" w-[269px] left-0 top-[266px] absolute text-neutral-700 text-[21px] font-semibold font-['Montserrat'] leading-normal">?“ž ?????Í¨??</div>
        <div className="Group34 w-[129px] h-[13px] left-0 top-[236px] absolute">
          <div className="Group10 w-[8.62px] h-2.5 left-0 top-[3px] absolute">
          </div>
          <div className=" w-[115px] h-2.5 left-[14px] top-0 absolute text-neutral-400 text-opacity-60 text-xs font-normal font-['Inter'] capitalize">???, ?“ž??????</div>
        </div>
        <div className="Group33 w-[125.67px] h-[21.49px] left-0 top-[305px] absolute">
        </div>
      </susung>

    </lawcenter>

    <leftarrow className="Group41 w-[50px] h-[50px] left-[1191px] top-[437px] absolute">
      <div className="Rectangle15 w-[50px] h-[50px] left-0 top-0 absolute bg-cyan-600 rounded-[15px] shadow" />
    </leftarrow>

    <rarrow className="Group42 w-[50px] h-[50px] left-0 top-[437px] absolute">
      <div className="Rectangle16 w-[50px] h-[50px] left-0 top-0 absolute bg-cyan-600 rounded-[15px] shadow" />
    </rarrow>

    <lawinfo className="Group113 w-[1177px] h-[207px] left-[26px] top-0 absolute">
      <div className="ExploringTheMostPopularGemsAroundTheGlobe w-[1061px] left-[60px] top-[53px] absolute text-center text-neutral-700 text-[67px] font-semibold font-['Montserrat'] leading-[72px]">AI ???? ???? ????</div>
      <div className=" w-[1177px] h-[53px] left-0 top-0 absolute text-center text-cyan-600 text-[28px] font-semibold font-['Montserrat'] leading-loose">???? ??? ???</div>
      <div className="Ai w-[929px] h-[62px] left-[195px] top-[145px] absolute text-zinc-500 text-base font-normal font-['Lato'] leading-normal">??? ?????? ???? ?????? ???? ?????? ?????????? ?¯C?? AI?? ????? ???? ?????? ???? ???? ???? ????? ??????? ??????. <br/>???????? ????? ???? ?????? ???? ?? ??????. ???????? ????? ????? ???? ?¯C?? ????????.</div>
    </lawinfo>

  </law>


  <tech className="RecentPost w-[1212px] h-[783px] left-[114px] top-[1979px] absolute">

    <div className="Group76 w-[1212px] h-[495px] left-0 top-[288px] absolute">

      <tech1 className="Group63 w-[579px] h-[216px] left-0 top-0 absolute">
        <div className="Group116 w-[579px] h-[216px] left-0 top-0 absolute">
          <img className="Image11 w-[287px] h-[216px] left-0 top-0 absolute" src="https://via.placeholder.com/287x216" />
          <div className="Insight w-[91.77px] h-[19px] left-[304px] top-0 absolute text-cyan-600 text-base font-semibold font-['Montserrat'] leading-normal">Insight</div>
          <div className="ExploringTheRichHeritageOfIndonesia w-[277px] h-[57px] left-[302px] top-[41px] absolute text-neutral-700 text-[21px] font-semibold font-['Montserrat'] leading-normal">Exploring the Rich Heritage of Indonesia</div>
        </div>
        <div className="LiEuropanLinguesEsMembresDelSamLorSeparatExistentieEsUnMyth w-[275px] h-[45px] left-[304px] top-[108px] absolute text-zinc-500 text-base font-normal font-['Lato'] leading-normal">Li Europan lingues es membres del sam  lor separat existentie es un myth...</div>
      </tech1>

      <tech2 className="Group63 w-[581px] h-[216px] left-[627px] top-0 absolute">
        <div className="Group116 w-[581px] h-[216px] left-0 top-0 absolute">
          <img className="Image11 w-[287px] h-[216px] left-0 top-0 absolute" src="https://via.placeholder.com/287x216" />
          <div className="Group117 w-[277px] h-[98px] left-[304px] top-0 absolute">
            <div className="Insight w-[91.77px] h-[19px] left-0 top-0 absolute text-cyan-600 text-base font-semibold font-['Montserrat'] leading-normal">Insight</div>
            <div className="ExploringTheRichHeritageOfIndonesia w-[277px] h-[57px] left-0 top-[41px] absolute text-neutral-700 text-[21px] font-semibold font-['Montserrat'] leading-normal">Exploring the Rich Heritage of Indonesia</div>
          </div>
        </div>
        <div className="LiEuropanLinguesEsMembresDelSamLorSeparatExistentieEsUnMyth w-[277px] h-[45px] left-[304px] top-[108px] absolute text-zinc-500 text-base font-normal font-['Lato'] leading-normal">Li Europan lingues es membres del sam  lor separat existentie es un myth...</div>
      </tech2>

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
        
        <tech4 className="Group122 w-[581px] h-[216px] left-[627px] top-0 absolute">
          <div className="Group116 w-[395.77px] h-[216px] left-0 top-0 absolute">
            <img className="Image11 w-[287px] h-[216px] left-0 top-0 absolute" src="https://via.placeholder.com/287x216" />
            <div className="Insight w-[91.77px] h-[19px] left-[304px] top-0 absolute text-cyan-600 text-base font-semibold font-['Montserrat'] leading-normal">Insight</div>
          </div>
          <div className="LiEuropanLinguesEsMembresDelSamLorSeparatExistentieEsUnMyth w-[277px] h-[45px] left-[304px] top-[108px] absolute text-zinc-500 text-base font-normal font-['Lato'] leading-normal">Li Europan lingues es membres del sam  lor separat existentie es un myth...</div>
        </tech4>

        <tech3 className="Group123 w-[581px] h-[216px] left-0 top-0 absolute">
          <div className="Group116 w-[581px] h-[216px] left-0 top-0 absolute">
            <img className="Image11 w-[287px] h-[216px] left-0 top-0 absolute" src="https://via.placeholder.com/287x216" />
            <div className="Group117 w-[277px] h-[98px] left-[304px] top-0 absolute">
              <div className="Insight w-[91.77px] h-[19px] left-0 top-0 absolute text-cyan-600 text-base font-semibold font-['Montserrat'] leading-normal">Insight</div>
              <div className="UnveilingTheAncientWondersOfEgypt w-[277px] h-[57px] left-0 top-[41px] absolute text-neutral-700 text-[21px] font-semibold font-['Montserrat'] leading-normal">Unveiling the Ancient Wonders of Egypt</div>
            </div>
          </div>
          <div className="LiEuropanLinguesEsMembresDelSamLorSeparatExistentieEsUnMyth w-[277px] h-[45px] left-[304px] top-[108px] absolute text-zinc-500 text-base font-normal font-['Lato'] leading-normal">Li Europan lingues es membres del sam  lor separat existentie es un myth...</div>
        </tech3>

      </div>
    </div>

    <techinfo className="Group112 w-[929px] h-[262px] left-[189px] top-0 absolute">
      <title className="Group69 w-[929px] h-[219px] left-0 top-[43px] absolute">
        <div className="OurBlogAndArticles w-[499px] left-[152px] top-0 absolute text-center text-neutral-700 text-[67px] font-semibold font-['Montserrat'] leading-[72px]">Our Blog and Articles</div>
        <div className="Ai w-[929px] h-[62px] left-0 top-[157px] absolute text-center text-zinc-500 text-base font-normal font-['Lato'] leading-normal">??? ?????? ???? ?????? ???? ?????? ?????????? ?¯C?? AI?? ????? ???? ?????? ???? ???? ???? ????? ??????? ??????. <br/>???????? ????? ???? ?????? ???? ?? ??????. ???????? ????? ????? ???? ?¯C?? ????????.</div>
      </title>
      <div className="JourneyJournal left-[298px] top-0 absolute text-center text-cyan-600 text-[28px] font-semibold font-['Montserrat'] leading-loose">Journey Journal</div>
    </techinfo>

  </tech>


  <about className="AboutUs w-[1221px] h-[516px] left-[122px] top-[1172px] absolute">

    <div className="DiscoverOurStory w-[468px] left-[743px] top-[113px] absolute text-neutral-700 text-[67px] font-semibold font-['Montserrat'] leading-[72px]">????? ????,<br/>?????? ????????</div>
    <div className="AboutUs left-[772px] top-[55px] absolute text-cyan-600 text-[28px] font-semibold font-['Montserrat'] leading-loose">About Us</div>
    <div className="Ai w-[449px] h-[116px] left-[772px] top-[283px] absolute text-zinc-500 text-base font-normal font-['Lato'] leading-normal">????? ?????? ???????? ??????? AI?¥ê??? ???????????. ?¯C?? ?????? ???????? ???? ????? ????????? ???????? ??????? ????íã???. ???????? ??????? ????? ???? ??????? ???????.</div>
    <img className="Rectangle9 w-[394px] h-[516px] left-0 top-0 absolute rounded-[15px] shadow" src="https://via.placeholder.com/394x516" />
    <img className="Rectangle10 w-[259px] h-[453px] left-[435px] top-[31px] absolute rounded-[15px] shadow" src="https://via.placeholder.com/259x453" />
  </about>


  <header className="HeroHeader w-[1440px] h-[881px] left-0 top-0 absolute">
    
    <img className="Image2 w-[1440px] h-[881px] left-0 top-0 absolute" src="https://via.placeholder.com/1440x881" />
    <div className="Image1 w-[1440px] h-[881px] left-0 top-0 absolute bg-black bg-opacity-30" />
    <div className=" w-[762px] h-[102.95px] left-[339px] top-[279.15px] absolute text-center text-white text-[90px] font-semibold font-['Montserrat'] leading-[104px]">???????? ????</div>
    <div className="Component1 w-[388.55px] h-[51.47px] left-[526px] top-[498px] absolute justify-center items-start gap-[102.55px] inline-flex">
      
      <seemore className="Button w-[143px] h-[51.47px] relative">
        <div className="Rectangle6 w-[143px] h-[51.47px] left-0 top-0 absolute bg-stone-900 rounded-[15px]" />
        <div className=" w-[69px] h-[16.83px] left-[37.14px] top-[17.82px] absolute text-white text-sm font-bold font-['Montserrat']">?? ??????</div>
      </seemore>

      <register className="Button w-[143px] h-[51.47px] relative">
        <div className="Rectangle6 w-[143px] h-[51.47px] left-0 top-0 absolute bg-white rounded-[15px]" />
        <div className=" w-[82px] h-[16.83px] left-[30.45px] top-[17.82px] absolute text-stone-900 text-sm font-bold font-['Montserrat']">???? ???????</div>
      </register>

    </div>
    <div className="Anti w-[706px] h-[23.76px] left-[367px] top-[422px] absolute text-center text-white text-base font-normal font-['Lato'] leading-normal">'AntI'?? ??? ?????? ??????, ?????? ???? ????? ????????.</div>
  </header>

</main>*/

<div className="MyProfile w-[1440px] h-[890px] pl-[29px] bg-neutral-50 justify-end items-center inline-flex">
  <div className="Frame5 w-[1440px] self-stretch px-[100px] py-[60px] flex-col justify-start items-start gap-2.5 inline-flex">
    <div className="Desc w-[1440px] h-[1080px] py-3.5 flex-col justify-start items-start flex">
      <div className="Frame6 self-stretch pb-[189px] flex-col justify-start items-start gap-2.5 flex">
        <div className="Picture px-2.5 border-2 border-zinc-300 flex-col justify-start items-start gap-2.5 flex">
          <div className="ProfileName w-[94px] h-[73px] justify-start items-start gap-2.5 inline-flex">
            <div className="Frame7 w-[1200px] h-[63px] pr-[9px] pt-5 justify-start items-start flex">
              <div className="Title w-[94px] h-[45px] text-neutral-800 text-4xl font-normal font-['Inter'] leading-loose">Title</div>
            </div>
          </div>
          <div className="Profile py-1 justify-start items-start inline-flex">
            <div className="FileUpload text-black text-4xl font-normal font-['Inter'] leading-loose">File Upload</div>
          </div>
          <div className="ProfileName w-[191px] h-[73px] justify-start items-start gap-2.5 inline-flex">
            <div className="Hashtag w-[161px] h-[45px] text-neutral-800 text-4xl font-normal font-['Inter'] leading-loose">Hashtag</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
