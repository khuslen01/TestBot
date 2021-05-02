class QuestionUnderstanding{

    constructor(contextText){
        this.contextText = contextText;
        this.queryNumber = 0 ;
    }
    

    getTypeOfQuestion(text) {
        // console.log("q: " + this.contextText);
        if(this.contextText.search("Тусламж")!= -1) return 911;
        if(this.contextText.search("мэдээлэл")!=-1) return 20;
        if(this.contextText.search("доош")!=-1) return 22;
        if(this.contextText.search("дээш")!=-1) return 21;
        if(this.contextText.search("дэлгүүр")!=-1) return 24;
        else return 404;
    }
    findKeyWord(){
        console.log("findkey: " + this.getTypeOfQuestion());
        if(this.getTypeOfQuestion()==20){
            this.queryNumber = 20;
            return this.contextText.substring(0, this.contextText.search("мэдээлэл")).trim();
        }
        else if(this.getTypeOfQuestion()==22){
            this.queryNumber = 22;
            return this.contextText.substring(0, this.contextText.search("доош")).trim();
        }
        else if(this.getTypeOfQuestion()==21){
            this.queryNumber = 21;
            return this.contextText.substring(0, this.contextText.search("дээш")).trim();
        }
        else if(this.getTypeOfQuestion()==24){
            this.queryNumber = 24;
            return this.contextText.substring(0, this.contextText.search("дэлгүүр")).trim();
        }
        else if(this.getTypeOfQuestion()==911){
            this.queryNumber = 911;
            //console.log("\n\n"+ contextText + "\n");
            return this.contextText.substring(0, this.contextText.search("Тусламж")).trim();
        }
        
        else{
            this.queryNumber = 404;
            return this.contextText.substring(0, this.contextText.search(" ")).trim();
        };
        return this.getTypeOfQuestion();
    }
    getQueryNumber(){
        return this.queryNumber;
    }
    
}
module.exports.QuestionUnderstanding = QuestionUnderstanding;