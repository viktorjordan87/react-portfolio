import React from "react";
import Infobox from "./Infobox/Infobox";
import "./Footer.scss";

function Footer() {
	return (
		<footer className="rjs-footer">
			<Infobox
				title="Company:"
				text="My company is registered in Estonia through the e-residency program. I issue an invoice according to the law in every aspect."
				link="https://www.e-resident.gov.ee/"
			/>
			<Infobox
				title="Bank:"
				text="My bank is Wise (TransferWise) that handles my multi currency accounts. I accept money in any currency."
				link="https://wise.com/"
			/>
		</footer>
	);
}

export default Footer;
