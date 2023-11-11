import axios from "axios";
import { useEffect, useState } from "react";
import "./page.css";

export default function Mypage() {
  const [myFeed, setMyFeed] = useState({
    username: "",
    profile: null, // Initialize profile as null
  });

  const [myinfo, setMyInfo] = useState("");

  useEffect(() => {
    handleGet();
  }, []);

  function handleGet() {
    const uri = `http://localhost:8080/${myFeed.username}`;

    axios.get(uri, myFeed).then((result) => {
      console.log(result.data);
      setMyInfo(result.data);
    });
  }

  function handleUpload() {
    const formData = new FormData();
    formData.append("username", myFeed.username);
    formData.append("profile", myFeed.profile);

    axios.post("http://localhost:8080/upload", formData).then((result) => {
      console.log(result.data);
    });
  }

  function handleChange(event) {    
    const file = event.target.files[0];

    // Display the selected image (optional)
    const reader = new FileReader();
    reader.onload = (e) => {
      // Assuming you have an image element to display the preview
      const previewImage = document.getElementById("previewImage");
      if (previewImage) {
        previewImage.src = e.target.result;
      }
    };
    reader.readAsDataURL(file);

    // Set the selected image in the state
    setMyFeed((prevFeed) => ({ ...prevFeed, profile: file }));
  }

  return (
    // <div>
    //   <h2>{myFeed.username}</h2>
    //   {myFeed.profile && <img id="previewImage" src={myFeed.profile} alt="Profile" />}
    //   <input type="file" accept="image/*" onChange={handleChange} />
    //   <button onClick={handleUpload}>Upload Image</button>
    // </div>
    <div className="mx-auto w-96 h-96 relative bg-neutral-50">
        <div className="w-96 h-96 relative bg-neutral-50">
  <div className="h-96 pb-96 left-[13px] top-0 absolute bg-neutral-50 flex-col justify-start items-start inline-flex">
    <div className="self-stretch pt-20 pb-11 justify-start items-start inline-flex">
      <div className="pl-10 pr-24 justify-start items-start gap-2.5 flex">
        <div className="w-36 h-36 justify-center items-center flex">
          <img className="w-36 h-36 relative rounded-full" src="https://via.placeholder.com/150x150" />
        </div>
      </div>
      <div className="w-96 py-3.5 flex-col justify-start items-start inline-flex">
        <div className="self-stretch justify-start items-start inline-flex">
          <div className="py-1 justify-start items-start flex">
            <div className="justify-start items-start gap-2.5 flex">
              <div className="text-neutral-800 text-3xl font-thin font-['Inter'] leading-loose">shirleyromero</div>
            </div>
            <div className="pl-5 py-px flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="px-2.5 py-1.5 rounded border border-zinc-300 justify-start items-start gap-2.5 inline-flex">
                <div className="text-neutral-800 text-sm font-semibold font-['Inter'] leading-none">+Upload</div>
              </div>
            </div>
          </div>
          <div className="pl-1 justify-start items-start gap-2.5 flex">
            <div className="p-2 justify-start items-start gap-2.5 flex">
              <div className="w-6 h-6 relative" />
            </div>
          </div>
          <div className="pl-5 py-px" />
        </div>
        <div className="self-stretch h-14 py-5 flex-col justify-start items-start gap-2.5 flex">
          <div className="justify-start items-start inline-flex">
            <div className="pr-10 justify-start items-start flex">
              <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="text-neutral-800 text-base font-semibold font-['Inter'] leading-none">0 </div>
              </div>
              <div className="justify-start items-start gap-2.5 flex">
                <div className="text-neutral-800 text-base font-normal font-['Inter'] leading-none"> posts</div>
              </div>
            </div>
            <div className="pr-10 justify-start items-start flex">
              <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="text-neutral-800 text-base font-semibold font-['Inter'] leading-none">255 </div>
              </div>
              <div className="justify-start items-start gap-2.5 flex">
                <div className="text-neutral-800 text-base font-normal font-['Inter'] leading-none"> followers</div>
              </div>
            </div>
            <div className="pr-10 justify-start items-start flex">
              <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="text-neutral-800 text-base font-semibold font-['Inter'] leading-none">500 </div>
              </div>
              <div className="justify-start items-start gap-2.5 flex">
                <div className="text-neutral-800 text-base font-normal font-['Inter'] leading-none"> following</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-96 pr-96 justify-start items-center inline-flex">
          <div className="text-neutral-800 text-base font-semibold font-['Inter'] leading-normal">Shirley Romero</div>
        </div>
      </div>
    </div>
    <div className="w-96 h-14 relative flex-col justify-start items-start flex">
      <div className="w-96 h-px justify-center items-center inline-flex">
        <div className="w-96 h-px bg-zinc-300" />
      </div>
      <div className="pr-5 justify-start items-start gap-28 inline-flex">
        <div className="self-stretch flex-col justify-start items-start inline-flex">
          <div className="w-12 h-px relative">
            <div className="w-12 h-px left-0 top-0 absolute bg-neutral-800" />
          </div>
          <div className="pr-14 py-4 justify-start items-start inline-flex">
            <div className="py-0.5 justify-start items-start gap-2.5 flex">
              <div className="w-3 h-3 justify-center items-center flex">
                <div className="w-3 h-3 relative flex-col justify-start items-start flex" />
              </div>
            </div>
            <div className="pl-1.5 justify-start items-start gap-2.5 flex">
              <div className="text-neutral-800 text-xs font-semibold font-['Inter'] uppercase leading-none">POSTS</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-col justify-start items-start inline-flex">
          <div className="pr-14 py-4 justify-start items-start inline-flex">
            <div className="py-0.5 justify-start items-start gap-2.5 flex">
              <div className="w-3 h-3 justify-center items-center flex">
                <div className="w-3 h-3 relative flex-col justify-start items-start flex" />
              </div>
            </div>
            <div className="pl-1.5 justify-start items-start gap-2.5 flex">
              <div className="text-neutral-400 text-xs font-semibold font-['Inter'] uppercase leading-none">like</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="self-stretch h-96 pt-5 justify-end items-center inline-flex">
      <div className="w-96 h-96 flex-col justify-center items-start gap-7 inline-flex">
        <div className="self-stretch grow shrink basis-0 justify-center items-start inline-flex">
          <div className="pr-7 justify-start items-start gap-2.5 inline-flex">
            <div className="w-72 h-72 pr-px pb-64 justify-center items-center flex">
              <div className="pr-3.5 pt-3.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="w-72 h-7 pl-64 justify-end items-center inline-flex">
                  <div className="w-7 h-7 relative flex-col justify-start items-start flex" />
                </div>
              </div>
            </div>
          </div>
          <div className="pr-7 justify-start items-start gap-2.5 inline-flex">
            <div className="w-72 h-72 pr-px pb-64 justify-center items-center flex">
              <div className="pr-3.5 pt-3.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="w-72 h-7 pl-64 justify-end items-center inline-flex">
                  <div className="w-7 h-7 relative flex-col justify-start items-start flex" />
                </div>
              </div>
            </div>
          </div>
          <div className="pr-7 justify-start items-start gap-2.5 inline-flex">
            <img className="w-72 h-72 relative" src="https://via.placeholder.com/293x293" />
          </div>
        </div>
        <div className="self-stretch grow shrink basis-0 justify-center items-start inline-flex">
          <div className="pr-7 justify-start items-start gap-2.5 inline-flex">
            <img className="w-72 h-72 relative" src="https://via.placeholder.com/293x293" />
          </div>
          <div className="pr-7 justify-start items-start gap-2.5 inline-flex">
            <img className="w-72 h-72 relative" src="https://via.placeholder.com/293x293" />
          </div>
          <div className="pr-7 justify-start items-start gap-2.5 inline-flex">
            <div className="w-72 h-72 pr-px pb-64 justify-center items-center flex">
              <div className="pr-3.5 pt-3.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="w-72 h-7 pl-64 justify-end items-center inline-flex">
                  <div className="w-7 h-7 relative flex-col justify-start items-start flex" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch grow shrink basis-0 justify-center items-start inline-flex">
          <div className="pr-7 justify-start items-start gap-2.5 inline-flex">
            <div className="w-72 h-72 pr-px pb-64 justify-center items-center flex">
              <div className="pr-3.5 pt-3.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="w-72 h-7 pl-64 justify-end items-center inline-flex">
                  <div className="w-7 h-7 relative flex-col justify-start items-start flex" />
                </div>
              </div>
            </div>
          </div>
          <div className="pr-7 justify-start items-start gap-2.5 inline-flex">
            <img className="w-72 h-72 relative" src="https://via.placeholder.com/293x293" />
          </div>
          <div className="pr-7 justify-start items-start gap-2.5 inline-flex">
            <div className="w-72 h-72 pr-px pb-64 justify-center items-center flex">
              <div className="pr-3.5 pt-3.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="w-72 h-7 pl-64 justify-end items-center inline-flex">
                  <div className="w-7 h-7 relative flex-col justify-start items-start flex" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch grow shrink basis-0 justify-center items-start inline-flex">
          <div className="pr-7 justify-start items-start gap-2.5 inline-flex">
            <div className="w-72 h-72 pr-px pb-64 justify-center items-center flex">
              <div className="pr-3.5 pt-3.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="w-72 h-7 pl-64 justify-end items-center inline-flex">
                  <div className="w-7 h-7 relative flex-col justify-start items-start flex" />
                </div>
              </div>
            </div>
          </div>
          <div className="pr-7 justify-start items-start gap-2.5 inline-flex">
            <div className="w-72 h-72 pr-px pb-64 justify-center items-center flex">
              <div className="pr-3.5 pt-3.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="w-72 h-7 pl-64 justify-end items-center inline-flex">
                  <div className="w-7 h-7 relative flex-col justify-start items-start flex" />
                </div>
              </div>
            </div>
          </div>
          <div className="pr-7 justify-start items-start gap-2.5 inline-flex">
            <div className="w-72 h-72 pr-px pb-64 justify-center items-center flex">
              <div className="pr-3.5 pt-3.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="w-72 h-7 pl-64 justify-end items-center inline-flex">
                  <div className="w-7 h-7 relative flex-col justify-start items-start flex" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch grow shrink basis-0 justify-center items-start inline-flex">
          <div className="pr-7 justify-start items-start gap-2.5 inline-flex">
            <div className="w-72 h-72 pr-px pb-64 justify-center items-center flex">
              <div className="pr-3.5 pt-3.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="w-72 h-7 pl-64 justify-end items-center inline-flex">
                  <div className="w-7 h-7 relative flex-col justify-start items-start flex" />
                </div>
              </div>
            </div>
          </div>
          <div className="pr-7 justify-start items-start gap-2.5 inline-flex">
            <div className="w-72 h-72 pr-px pb-64 justify-center items-center flex">
              <div className="pr-3.5 pt-3.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="w-72 h-7 pl-64 justify-end items-center inline-flex">
                  <div className="w-7 h-7 relative flex-col justify-start items-start flex" />
                </div>
              </div>
            </div>
          </div>
          <div className="pr-7 justify-start items-start gap-2.5 inline-flex">
            <div className="w-72 h-72 pr-px pb-64 justify-center items-center flex">
              <div className="pr-3.5 pt-3.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="w-72 h-7 pl-64 justify-end items-center inline-flex">
                  <div className="w-7 h-7 relative flex-col justify-start items-start flex" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch grow shrink basis-0 justify-center items-start inline-flex">
          <div className="pr-7 justify-start items-start gap-2.5 inline-flex">
            <div className="w-72 h-72 pr-px pb-64 justify-center items-center flex">
              <div className="pr-3.5 pt-3.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="w-72 h-7 pl-64 justify-end items-center inline-flex">
                  <div className="w-7 h-7 relative flex-col justify-start items-start flex" />
                </div>
              </div>
            </div>
          </div>
          <div className="pr-7 justify-start items-start gap-2.5 inline-flex">
            <div className="w-72 h-72 pr-px pb-64 justify-center items-center flex">
              <div className="pr-3.5 pt-3.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="w-72 h-7 pl-64 justify-end items-center inline-flex">
                  <div className="w-7 h-7 relative flex-col justify-start items-start flex" />
                </div>
              </div>
            </div>
          </div>
          <div className="pr-7 justify-start items-start gap-2.5 inline-flex">
            <div className="w-72 h-72 pr-px pb-64 justify-center items-center flex">
              <div className="pr-3.5 pt-3.5 flex-col justify-start items-start gap-2.5 inline-flex">
                <div className="w-72 h-7 pl-64 justify-end items-center inline-flex">
                  <div className="w-7 h-7 relative flex-col justify-start items-start flex" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-96 h-px left-0 top-[50px] absolute bg-zinc-300" />
</div>
    </div>
    
  );
}
