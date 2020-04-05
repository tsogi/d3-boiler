import * as d3 from "d3";
import { min, max } from "./utils";

export default {
	svgElement: null,

	render: function(svgContainer){
		this.svgElement = d3.select(svgContainer).append("svg");
	}
}