import getData from "../utils/getdata";
import shuffleArray from "../utils/shuffleArray";
import Modal from "./modal";
import Question from "./question";

class Round {
	constructor(target, categoryData, roundData, categoryType) {
		this.target = target;
		this.questionNum = 0;
		this.score = 0;
		this.categoryData = categoryData;
		this.roundData = roundData;
		this.categoryType = categoryType;

		new Question(this.target, this.categoryType, this.categoryData, this.roundData, this.questionNum, this.score);
	}

}

export default Round;