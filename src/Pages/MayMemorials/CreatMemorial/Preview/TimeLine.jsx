"use client"

const TimeLine = () => {
  // JSON data for timeline entries
  const timelineData = [
    {
      id: 1,
      year: "1945",
      title: "Born In Chicago",
      description:
        "John Smith was Born On April 15, 1945, At Chicago General Hospital, A Moment That Marked The Beginning Of A Life Filled With Purpose, Love, And Achievement. His Was The Beloved Son Of Robert And Mary Smith, Who Welcomed Him Into The World With Open Hearts And High Hopes For The Future. Raised In The Vibrant City Of Chicago, John's Early Years Were Shaped By The Warmth Of A Close-Knit Family, The Values Instilled By His Parents, And The Rich Experiences Of Growing Up In A Bustling Community. From The Very Beginning, John Carried With Him A Quiet Strength And Gentle Spirit That Would Later Define The Remarkable Life He Lived.",
    },
    {
      id: 2,
      year: "1963",
      title: "Born In Chicago",
      description:
        "John Smith was Born On April 15, 1945, At Chicago General Hospital, A Moment That Marked The Beginning Of A Life Filled With Purpose, Love, And Achievement. His Was The Beloved Son Of Robert And Mary Smith, Who Welcomed Him Into The World With Open Hearts And High Hopes For The Future. Raised In The Vibrant City Of Chicago, John's Early Years Were Shaped By The Warmth Of A Close-Knit Family, The Values Instilled By His Parents, And The Rich Experiences Of Growing Up In A Bustling Community. From The Very Beginning, John Carried With Him A Quiet Strength And Gentle Spirit That Would Later Define The Remarkable Life He Lived.",
    },
    {
      id: 3,
      year: "2000",
      title: "Born In Chicago",
      description:
        "John Smith was Born On April 15, 1945, At Chicago General Hospital, A Moment That Marked The Beginning Of A Life Filled With Purpose, Love, And Achievement. His Was The Beloved Son Of Robert And Mary Smith, Who Welcomed Him Into The World With Open Hearts And High Hopes For The Future. Raised In The Vibrant City Of Chicago, John's Early Years Were Shaped By The Warmth Of A Close-Knit Family, The Values Instilled By His Parents, And The Rich Experiences Of Growing Up In A Bustling Community. From The Very Beginning, John Carried With Him A Quiet Strength And Gentle Spirit That Would Later Define The Remarkable Life He Lived.",
    },
    {
      id: 4,
      year: "2000",
      title: "Born In Chicago",
      description:
        "John Smith was Born On April 15, 1945, At Chicago General Hospital, A Moment That Marked The Beginning Of A Life Filled With Purpose, Love, And Achievement. His Was The Beloved Son Of Robert And Mary Smith, Who Welcomed Him Into The World With Open Hearts And High Hopes For The Future. Raised In The Vibrant City Of Chicago, John's Early Years Were Shaped By The Warmth Of A Close-Knit Family, The Values Instilled By His Parents, And The Rich Experiences Of Growing Up In A Bustling Community. From The Very Beginning, John Carried With Him A Quiet Strength And Gentle Spirit That Would Later Define The Remarkable Life He Lived.",
    },
    {
      id: 5,
      year: "2023",
      title: "Born In Chicago",
      description:
        "John Smith was Born On April 15, 1945, At Chicago General Hospital, A Moment That Marked The Beginning Of A Life Filled With Purpose, Love, And Achievement. His Was The Beloved Son Of Robert And Mary Smith, Who Welcomed Him Into The World With Open Hearts And High Hopes For The Future. Raised In The Vibrant City Of Chicago, John's Early Years Were Shaped By The Warmth Of A Close-Knit Family, The Values Instilled By His Parents, And The Rich Experiences Of Growing Up In A Bustling Community. From The Very Beginning, John Carried With Him A Quiet Strength And Gentle Spirit That Would Later Define The Remarkable Life He Lived.",
    },
  ]

  return (
    <div className=" bg-[#F4E2D9] rounded-xl p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-[#BA927D] mb-8">Life Timeline</h1>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={item.id} className="relative">
                {/* Timeline Item */}
                <div className="flex items-start">
                  {/* Year Badge */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="bg-[#BA927D] text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                      {item.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-8 bg-white rounded-lg shadow-sm border border-orange-100 p-6 flex-1">
                    <h3 className="text-xl font-semibold text-[#BA927D] mb-4">{item.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>

              

                {/* Only render connector & dots if not last item */}
{index < timelineData.length - 1 && (
  <>
    {/* Line connecting to next item */}
    <div className="absolute left-6 top-10 w-0.5 h-[96%] bg-[#BA927D] transform -translate-x-0.5"></div>

    {/* Top connection dot */}
    <div className="absolute left-[19px] top-10 w-2 h-2 bg-[#BA927D] rounded-full z-20"></div>

    {/* Bottom connection dot */}
    <div className="absolute left-[19px] bottom-[-40px] w-2 h-2 bg-[#BA927D] rounded-full z-20"></div>
  </>
)}

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeLine
