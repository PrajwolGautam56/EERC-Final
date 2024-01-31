export default function Card() {
	return (
		<div >
        <br>
             
        </br>
			<div className="h-52 ml-48 float-left 
							-mt-10 w-96 flex-col 
							rounded-xl bg-white bg-clip-border 
							text-gray-700 shadow-2xl">
				<div className="p-6">
					<h5 className="text-center mr-4 mb-2 
								block font-sans text-xl 
								font-semibold text-blue-gray-900 
								antialiased">
						Reach Us At
					</h5>
					<ul>
						<li className="mt-2">
							<span><i className="fa fa-phone mr-2"></i> </span>
							+977- 9832222
						</li>
						<li className="mt-2">
							<span><i className="fa fa-envelope mr-2"></i> </span>
							<span>info@eerc.com.np</span>
						</li>
						<li className="mt-2">
							<span><i className="fa-solid fa-map-pin mr-2"></i> 
							</span>
                            info@eerc.com.np
							<span className="pl-4">
								Kathmandu
							</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="min-[0px]:hidden md:hidden  lg:block mr-36  text-center float-right 
						-mt-11 w-1/3 flex-col rounded-xl 
						bg-white text-gray-700 shadow-2xl">
				<div className="p-6 ">
					<h5 className="mb-2 block font-sans 
								text-xl font-semibold 
								text-blue-gray-900 antialiased">
						Career and Vacancy
					</h5>
					<i className="fa fa-handshake fa-2xl"></i>
					<div className="text-left mt-4">
						<span><i className="fa fa-envelope mr-2"></i> </span>
						<span> career@eerc.com.np</span>
					</div>
					<div className="mt-2 text-left">
					<span><i className="fa-solid fa-map-pin mr-2"></i> </span>
                    M8PC+54G, Lalitpur 44600, Kathmandu
<span className="pl-5">136,
						Nepal</span>
					</div>
				</div>
			</div>
		</div>
	)
}
