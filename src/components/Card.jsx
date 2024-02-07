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
			<iframe className="  maps sm:" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.030738341657!2d85.31775997520516!3d27.68544482645749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c8b9b9e217%3A0xd19bda6f193c60b6!2sEnvironment%20and%20Engineering%20Research%20Center%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1706298883336!5m2!1sen!2sin" ></iframe>

		</div>
	)
}
