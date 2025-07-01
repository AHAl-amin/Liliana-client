export default function Component() {
  const willData = [
    {
      id: 1,
      name: "John Smith Doe",
      description:
        "John smith doe, a resident of New York, New York, being of sound mind, declares this to be my last will and testament. I revoke all wills and codicils previously made by me.",
      beneficiaries: 3,
      assets: 6,
    },
    {
      id: 2,
      name: "Jane Doe",
      description:
        "Jane Doe, residing in Los Angeles, California, declares this as her final will, revoking all prior versions and ensuring her wishes are honored faithfully.",
      beneficiaries: 2,
      assets: 4,
    },
    {
      id: 3,
      name: "Michael Johnson",
      description:
        "Michael Johnson, from Austin, Texas, sound in mind and body, states this document as his last will and testament. All earlier wills are void.",
      beneficiaries: 4,
      assets: 7,
    },
    {
      id: 4,
      name: "Jane Doe",
      description:
        "Jane Doe, residing in Los Angeles, California, declares this as her final will, revoking all prior versions and ensuring her wishes are honored faithfully.",
      beneficiaries: 2,
      assets: 4,
    },
    {
      id: 5,
      name: "Michael Johnson",
      description:
        "Michael Johnson, from Austin, Texas, sound in mind and body, states this document as his last will and testament. All earlier wills are void.",
      beneficiaries: 4,
      assets: 7,
    },
    {
      id: 6,
      name: "Michael Johnson",
      description:
        "Michael Johnson, from Austin, Texas, sound in mind and body, states this document as his last will and testament. All earlier wills are void.",
      beneficiaries: 4,
      assets: 7,
    },
  ];

  return (
    <div className="bg-gray-50 p-10 my-10 rounded-xl">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {willData.map((will) => (
            <div
              key={will.id}
              className="bg-[#F1E9E5] rounded-lg p-6 shadow-sm border border-orange-100"
            >
              {/* Header */}
              <div className="text-center mb-4">
                <h2 className="text-[#CB7548] cursor-pointer text-xl font-medium tracking-wide mb-1">
                  LAST WILL AND TESTAMENT
                </h2>
                <p className="text-[#CB7548] cursor-pointer text-xs">OF</p>
                <h3 className="text-[#CB7548] cursor-pointer text-lg font-semibold mt-1 ">
                  {will.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-base leading-relaxed mb-6 line-clamp-4">
                {will.description}
              </p>

              {/* Stats */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-[#CB7548] rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs">Beneficiaries</p>
                    <p className="text-[#CB7548] cursor-pointer text-xl font-semibold">
                      {will.beneficiaries}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-[#CB7548] rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 text-xs">Assets</p>
                    <p className="text-[#CB7548] cursor-pointer text-xl font-semibold">
                      {will.assets}
                    </p>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex space-x-3">
                <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 border border-[#CB7548] rounded-full text-[#CB7548] cursor-pointer hover:bg-orange-100 transition-colors">
                  <span className="text-sm font-medium">View</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 border border-[#CB7548] rounded-full text-[#CB7548] cursor-pointer hover:bg-orange-100 transition-colors">
                  <span className="text-sm font-medium">Edit</span>
                </button>
                <button className="flex-1 flex items-center justify-center space-x-2 py-2 px-4 border border-[#CB7548] rounded-full text-[#CB7548] cursor-pointer hover:bg-orange-100 transition-colors">
                  <span className="text-sm font-medium">Share</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
