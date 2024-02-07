import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function Card() {
	return (
		<div >
        <br>
             
        </br>
			<div className="h-52 ml-24 sm:ml-2 md:ml-24 lg:ml-24 float-left 
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
                            Lalitpur, 
							<span className="pl-4">
								Kathmandu
							</span>
						</li>
						<li className="mt-2">
							<span><i className="fa-solid fa-map-pin mr-2">Follow Us , <BsFacebook /></i>
							 
							</span>
                            
							<span className="pl-4">
							 
							</span>
						</li>
					</ul>
				</div>
			</div>

		</div>
	)
}
