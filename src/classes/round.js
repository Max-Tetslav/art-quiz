import Question from "./question";

class Round {
	constructor(target, categoryData, roundData, categoryType, roundId) {
		this.target = target;
		this.questionNum = 0;
		this.score = 0;
		this.categoryData = categoryData;
		this.roundData = roundData;
		this.categoryType = categoryType;
		this.roundId = roundId;

		new Question(this.target, this.categoryType, this.categoryData, this.roundData, this.questionNum, this.score, this.roundId);
	}
}

export default Round;