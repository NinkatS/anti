import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


return (
    <div className="UserProfile w-[1440px] h-[2300px] px-[264px] pb-[415px] bg-neutral-50 flex-col justify-start items-center inline-flex">
  <div className="UserProfileBody w-[912px] h-[2052px] relative bg-neutral-50 flex-col justify-start items-start flex">
    <div className="Frame2 justify-center items-center inline-flex">
      
      <profileheader className="Header w-[935px] self-stretch pt-[139px] pb-11 justify-start items-start inline-flex">
        
        <profilepic className="ProfilePic pl-[71px] pr-[101px] justify-start items-start gap-2.5 flex">
          <div className="ProfilePic w-[150px] h-[150px] justify-center items-center flex">
            <img className="ProfilePicS w-[150px] h-[150px] relative rounded-[150px]" src="https://via.placeholder.com/150x150" />
          </div>
        </profilepic>

        <profileinfo className="Desc w-[613px] py-3.5 flex-col justify-start items-start inline-flex">
          <div className="Account self-stretch justify-start items-start inline-flex">
            <div className="Profile py-1 justify-start items-start flex">
              <div className="ProfileName justify-start items-start gap-2.5 flex">
                <nametext className="Shirleyromero text-neutral-800 text-[28px] font-thin font-['Inter'] leading-loose">shirleyromero</nametext>
              </div>

              <upload className="Button pl-5 py-px flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="Button px-2.5 py-1.5 rounded border border-zinc-300 justify-start items-start gap-2.5 inline-flex">
                  <div className="Upload text-neutral-800 text-sm font-semibold font-['Inter'] leading-[18px]">+Upload</div>
                </div>
              </upload>

            </div>
            <div className="Button pl-5 py-px" />
          </div>

          <div className="Tag self-stretch h-[58px] py-5 flex-col justify-start items-start gap-2.5 flex">
            <div className="Tag justify-start items-start inline-flex">

              <post className="Button pr-10 justify-start items-start flex">
                <div className="ButtonSize flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className=" text-neutral-800 text-base font-semibold font-['Inter'] leading-[18px]">0 </div>
                </div>
                <div className="ButtonName justify-start items-start gap-2.5 flex">
                  <div className="Posts text-neutral-800 text-base font-normal font-['Inter'] leading-[18px]"> posts</div>
                </div>
              </post>

              <follower className="Button pr-10 justify-start items-start flex">
                <div className="ButtonSize flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className=" text-neutral-800 text-base font-semibold font-['Inter'] leading-[18px]">255 </div>
                </div>
                <div className="ButtonName justify-start items-start gap-2.5 flex">
                  <div className="Posts text-neutral-800 text-base font-normal font-['Inter'] leading-[18px]"> followers</div>
                </div>
              </follower>

              <following className="Button pr-10 justify-start items-start flex">
                <div className="ButtonSize flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className=" text-neutral-800 text-base font-semibold font-['Inter'] leading-[18px]">500 </div>
                </div>
                <div className="ButtonName justify-start items-start gap-2.5 flex">
                  <div className="Posts text-neutral-800 text-base font-normal font-['Inter'] leading-[18px]"> following</div>
                </div>
              </following>

            </div>
          </div>

          <username className="ProfileName w-[613px] pr-[496px] justify-start items-center inline-flex">
            <div className="ShirleyRomero text-neutral-800 text-base font-semibold font-['Inter'] leading-normal">Shirley Romero</div>
          </username>

        </profileinfo>
        
      </profileheader>

    </div>
    <userPicList className="UserPosts w-[963px] h-[1898px] flex-col justify-center items-start gap-7 inline-flex">
      
      <row1 className="Row self-stretch grow shrink basis-0 justify-center items-start inline-flex">
        <div className="MyPost self-stretch pr-7 justify-start items-start gap-2.5 inline-flex">
          <img className="SmallPost w-[293px] h-[293px] relative" src="https://via.placeholder.com/293x293" />
        </div>
        <div className="MyPost self-stretch pr-7 justify-start items-start gap-2.5 inline-flex">
          <img className="SmallPost w-[293px] h-[293px] relative" src="https://via.placeholder.com/293x293" />
        </div>
        <div className="MyPost self-stretch pr-7 justify-start items-start gap-2.5 inline-flex">
          <img className="SmallPost w-[293px] h-[293px] relative" src="https://via.placeholder.com/293x293" />
        </div>
      </row1>

      <row2 className="Row self-stretch grow shrink basis-0 justify-center items-start inline-flex">
        <div className="MyPost self-stretch pr-7 justify-start items-start gap-2.5 inline-flex">
          <img className="SmallPost w-[293px] h-[293px] relative" src="https://via.placeholder.com/293x293" />
        </div>
        <div className="MyPost self-stretch pr-7 justify-start items-start gap-2.5 inline-flex">
          <img className="SmallPost w-[293px] h-[293px] relative" src="https://via.placeholder.com/293x293" />
        </div>
        <div className="MyPost self-stretch pr-7 justify-start items-start gap-2.5 inline-flex">
          <img className="SmallPost w-[293px] h-[293px] relative" src="https://via.placeholder.com/293x293" />
        </div>
      </row2>

      <row3 className="Row self-stretch grow shrink basis-0 justify-center items-start inline-flex">
        <div className="MyPost self-stretch pr-7 justify-start items-start gap-2.5 inline-flex">
          <img className="SmallPost w-[293px] h-[293px] relative" src="https://via.placeholder.com/293x293" />
        </div>
        <div className="MyPost self-stretch pr-7 justify-start items-start gap-2.5 inline-flex">
          <img className="SmallPost w-[293px] h-[293px] relative" src="https://via.placeholder.com/293x293" />
        </div>
        <div className="MyPost self-stretch pr-7 justify-start items-start gap-2.5 inline-flex">
          <img className="SmallPost w-[293px] h-[293px] relative" src="https://via.placeholder.com/293x293" />
        </div>
      </row3>

      <row4 className="Row self-stretch grow shrink basis-0 justify-center items-start inline-flex">
        <div className="MyPost self-stretch pr-7 justify-start items-start gap-2.5 inline-flex">
          <img className="SmallPost w-[293px] h-[293px] relative" src="https://via.placeholder.com/293x293" />
        </div>
        <div className="MyPost self-stretch pr-7 justify-start items-start gap-2.5 inline-flex">
          <img className="SmallPost w-[293px] h-[293px] relative" src="https://via.placeholder.com/293x293" />
        </div>
        <div className="MyPost self-stretch pr-7 justify-start items-start gap-2.5 inline-flex">
          <img className="SmallPost w-[293px] h-[293px] relative" src="https://via.placeholder.com/293x293" />
        </div>
      </row4>

      <row5 className="Row self-stretch grow shrink basis-0 justify-center items-start inline-flex">
        <div className="MyPost self-stretch pr-7 justify-start items-start gap-2.5 inline-flex">
          <img className="SmallPost w-[293px] h-[293px] relative" src="https://via.placeholder.com/293x293" />
        </div>
        <div className="MyPost self-stretch pr-7 justify-start items-start gap-2.5 inline-flex">
          <img className="SmallPost w-[293px] h-[293px] relative" src="https://via.placeholder.com/293x293" />
        </div>
        <div className="MyPost self-stretch pr-7 justify-start items-start gap-2.5 inline-flex">
          <img className="SmallPost w-[293px] h-[293px] relative" src="https://via.placeholder.com/293x293" />
        </div>
      </row5>

      <row6 className="Row self-stretch grow shrink basis-0 justify-center items-start inline-flex">
        <div className="MyPost self-stretch pr-7 justify-start items-start gap-2.5 inline-flex">
          <img className="SmallPost w-[293px] h-[293px] relative" src="https://via.placeholder.com/293x293" />
        </div>
        <div className="MyPost self-stretch pr-7 justify-start items-start gap-2.5 inline-flex">
          <img className="SmallPost w-[293px] h-[293px] relative" src="https://via.placeholder.com/293x293" />
        </div>
        <div className="MyPost self-stretch pr-7 justify-start items-start gap-2.5 inline-flex">
          <img className="SmallPost w-[293px] h-[293px] relative" src="https://via.placeholder.com/293x293" />
        </div>
      </row6>

    </userPicList>
  </div>
</div>
);
