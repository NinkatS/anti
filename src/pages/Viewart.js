return (
    <>

    <div className="MyProfile w-[1440px] h-[1080px] pb-[181px] bg-neutral-50 justify-center items-center inline-flex">
      <div className="Desc grow shrink basis-0 self-stretch py-3.5 flex-col justify-start items-start inline-flex">
        <div className="Group4 h-[734px] relative">

          <picture className="Frame6 w-[1141px] h-[640px] pb-[30px] left-[149px] top-[94px] absolute flex-col justify-start items-start gap-2.5 inline-flex">
            <div className="Picture px-2.5 flex-col justify-start items-start gap-2.5 flex">
              <img className="ClaudioSchwarzK39rghmlov8Unsplash1 w-[1121px] h-[610px]" src="https://via.placeholder.com/1121x610" />
            </div>
          </picture>

          <picinfo className="Frame7 w-[1440px] h-[73px] px-[100px] left-0 top-0 absolute flex-col justify-start items-start inline-flex">
            
            <title className="Account w-[1440px] justify-start items-start inline-flex">
              <div className="Profile py-1 justify-start items-start flex">

                <div className="ProfileName justify-start items-start gap-2.5 flex">
                  <div className="Title text-neutral-800 text-[28px] font-thin font-['Inter'] leading-loose">Title</div>
                </div>

              </div>
            </title>

            <div className="Picinfo w-[1340px] pr-[1065px] pb-[9px] justify-start items-center inline-flex">
              <div className="HashtagPictureInfo text-neutral-800 text-base font-semibold font-['Inter'] leading-normal">#hashtag information of the picture</div>
            </div>

          </picinfo>


        </div>

        <artist className="Button w-[1440px] h-[138px] py-[7px] rounded border border-zinc-300 flex-col justify-start items-start gap-2.5 flex">
        
          <div className="Header w-[1299px] h-[132px] pt-2.5 pb-11 justify-start items-start inline-flex">
           
            <profilepic className="ProfilePic w-[283px] h-[122px] pl-[71px] pr-[101px] justify-start items-start gap-2.5 flex">
              <div className="ProfilePic w-[600px] h-[105px] pl-[22px] pr-[23px] justify-center items-center flex">
                <img className="ProfilePicS left-[100px] w-[105px] h-[105px] relative rounded-[150px]" src="https://via.placeholder.com/105x105" />
              </div>
            </profilepic>

            <artistinfo className="Desc w-[825px] h-[105px] py-3.5 flex-col justify-start items-start inline-flex">
              <div className="Account self-stretch justify-start items-start inline-flex">
                <div className="Profile py-1 justify-start items-start flex">
                  <div className="ProfileName justify-start items-start gap-2.5 flex">
                    <div className="Shirleyromero text-neutral-800 text-[28px] font-thin font-['Inter'] leading-loose">shirleyromero</div>
                  </div>

                  <followbutton className="Button pl-5 py-px flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="Button px-2.5 py-1.5 bg-white rounded border border-zinc-300 justify-start items-start gap-2.5 inline-flex">
                      <div className="Follow text-neutral-800 text-sm font-semibold font-['Inter'] leading-[18px]">Follow</div>
                    </div>
                  </followbutton>

                </div>
              </div>
              <div className="ProfileName w-[825px] pr-[708px] justify-start items-center inline-flex">
                <div className="ShirleyRomero text-neutral-800 text-base font-semibold font-['Inter'] leading-normal">Shirley Romero</div>
              </div>
            </artistinfo>
            
            <div className="IconsActivityfeed w-[62px] h-[62px] relative" />
          </div>
        
        </artist>

      </div>
    </div>
    </>
);