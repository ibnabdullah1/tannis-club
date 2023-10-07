import "./Reviews.css";
const Reviews = () => {
  return (
    <div className="px-3">
      <div className=" reviews-bg rounded-md w-full my-10">
        <div className="reviews-overlay rounded-md min-h-[80vh] flex justify-center items-center">
          <h3 className="font-semibold text-white my-3 text-6xl uppercase Barlow-Condensed ">
            Popular Tweets
          </h3>
        </div>
      </div>
      <div className="container mx-auto max-w-6xl pb-10 p-4">
        <div className="md:columns-2 lg:columns-3 gap-6 p-4 sm:p-1 mt-2">
          <div className="animate-in zoom-in duration-200">
            <div className="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
              <div className="flex flex-col break-inside-avoid-page z-0 relative">
                <div className="flex justify-between">
                  <div className="flex space-x-6">
                    <div className="flex space-x-4 flex-shrink-0 w-52">
                      <img
                        src="https://randomuser.me/api/portraits/men/51.jpg"
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-semibold">Salvador Rose</div>
                        <div className="text-sm">@Salvador</div>
                      </div>
                    </div>
                  </div>
                </div>
                Quick service & very trustworthy. Worked with Tom Nolan on a
                quick fix on my mirror. He was very knowledgeable about
                potential issues before getting into it & was able to get it
                fixed very quickly. I would trust them with any future repairs,
                I would not take my car anywhere else.
              </div>
            </div>
          </div>

          <div className="animate-in zoom-in duration-200">
            <div className="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
              <div className="flex flex-col break-inside-avoid-page z-0 relative">
                <div className="flex justify-between">
                  <div className="flex space-x-6">
                    <div className="flex space-x-4 flex-shrink-0 w-52">
                      <img
                        src="https://randomuser.me/api/portraits/men/34.jpg"
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-semibold">John doe</div>
                        <div className="text-sm">@John</div>
                      </div>
                    </div>
                  </div>
                </div>

                <span>
                  Took care of my insurance needs. Looked for the best rates.
                  Best insurance agent by far. Honest and trustworthy. Thank you
                  Gil. We appreciate your hard work! Highly recommend!
                </span>
              </div>
            </div>
          </div>

          <div className="animate-in zoom-in duration-200">
            <div className="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
              <div className="flex flex-col break-inside-avoid-page z-0 relative">
                <div className="flex justify-between">
                  <div className="flex space-x-6">
                    <div className="flex space-x-4 flex-shrink-0 w-52">
                      <img
                        src="https://randomuser.me/api/portraits/men/78.jpg"
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-semibold">Mike tyson</div>
                        <div className="text-sm">@mike</div>
                      </div>
                    </div>
                  </div>
                </div>

                <span>
                  Jon and the entire Valley Roofing Staff were very professional
                  and were great to work with. They were always on time and
                  finished the job when they promised. Their work was excellent
                  and their cleaned up after the job was complete was excellent.
                  I would definitely use them again and would recommend them to
                  anyone needing an excellent roofing company.”
                </span>
              </div>
            </div>
          </div>

          <div className="animate-in zoom-in duration-200">
            <div className="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
              <div className="flex flex-col break-inside-avoid-page z-0 relative">
                <div className="flex justify-between">
                  <div className="flex space-x-6">
                    <div className="flex space-x-4 flex-shrink-0 w-52">
                      <img
                        src="https://randomuser.me/api/portraits/women/51.jpg"
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-semibold">Sia</div>
                        <div className="text-sm">@Sia</div>
                      </div>
                    </div>
                  </div>
                </div>

                <span>
                  Amazing car buying experience! Shopped around 3 different
                  dealers and Power Ford had by far the most friendly staff and
                  comfortable show room. The sales team was fantastic as well as
                  the finance manager. From start to finish everything was
                  beyond expectation.
                </span>
              </div>
            </div>
          </div>

          <div className="animate-in zoom-in duration-200">
            <div className="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
              <div className="flex flex-col break-inside-avoid-page z-0 relative">
                <div className="flex justify-between">
                  <div className="flex space-x-6">
                    <div className="flex space-x-4 flex-shrink-0 w-52">
                      <img
                        src="https://randomuser.me/api/portraits/men/34.jpg"
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-semibold">Cheung</div>
                        <div className="text-sm">@Cheung</div>
                      </div>
                    </div>
                  </div>
                </div>

                <span>
                  This place is great! They have a huge selection of all kinds
                  of instruments, a beautiful show room, and the most friendly
                  staff I’ve encountered in a long time. I got a better deal
                  than I was in expecting on an electric piano. I’ll definitely
                  be back!
                </span>
              </div>
            </div>
          </div>

          <div className="animate-in zoom-in duration-200">
            <div className="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
              <div className="flex flex-col break-inside-avoid-page z-0 relative">
                <div className="flex justify-between">
                  <div className="flex space-x-6">
                    <div className="flex space-x-4 flex-shrink-0 w-52">
                      <img
                        src="https://randomuser.me/api/portraits/women/8.jpg"
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-semibold">Kendra</div>
                        <div className="text-sm">@Kendra</div>
                      </div>
                    </div>
                  </div>
                </div>

                <span>
                  Guyou did an excellent job installing solar on my house! The
                  workers were prompt and professional and cleaned up after
                  themselves daily. The work was very well done and blends
                  perfectly with my roof. Everything has been working great and
                  they are prompt with responding to any questions
                </span>
              </div>
            </div>
          </div>

          <div className="animate-in zoom-in duration-200">
            <div className="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
              <div className="flex flex-col break-inside-avoid-page z-0 relative">
                <div className="flex justify-between">
                  <div className="flex space-x-6">
                    <div className="flex space-x-4 flex-shrink-0 w-52">
                      <img
                        src="https://randomuser.me/api/portraits/men/5.jpg"
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-semibold">King</div>
                        <div className="text-sm">@king</div>
                      </div>
                    </div>
                  </div>
                </div>

                <span>
                  Buying from Liberty was a great experience. The team was very
                  knowledgeable and patient with my questions. They were very
                  helpful when I wanted to adjust my orders.Friendly and highly
                  competent folks. Excellent…I would give them my highest
                  recommendation!
                </span>
              </div>
            </div>
          </div>

          <div className="animate-in zoom-in duration-200">
            <div className="ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-sky-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative">
              <div className="flex flex-col break-inside-avoid-page z-0 relative">
                <div className="flex justify-between">
                  <div className="flex space-x-6">
                    <div className="flex space-x-4 flex-shrink-0 w-52">
                      <img
                        src="https://randomuser.me/api/portraits/men/50.jpg"
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <div className="font-semibold">Yoda</div>
                        <div className="text-sm">@yoda</div>
                      </div>
                    </div>
                  </div>
                </div>

                <span>
                  Joel and Christine made what would have been a chore for me
                  having to pick out blinds, a fun experience. They are geniuses
                  at what they do. Their product is top-notch. They love their
                  jobs, but more over, they love their clients! Out of five
                  stars, I give them six!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
