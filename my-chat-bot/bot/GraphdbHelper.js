const fetch = require('node-fetch');
const util = require('util');
const { SparqlQueries } = require('./sparqlQueries');

class GraphdbHelper {
    constructor(Word,Number){
        this.QuestionNumber = Number;
        this.KeyWord = Word;
    }

    async responseBack(){
            
            // console.log("\n\n Query begin : "+SparqlQueries.courseInf);
            var query = this.getQuery();
            const host = 'http://localhost:7200';
            const path = '/repositories/thesisLast';
            const params = '?query=';
            const url = host + path + params + query;

            var res = await fetch(url, {
                method: 'GET',
                headers: {
                    Accept: 'application/sparql-results+json'
                }
            })
            if (!res.ok) {
                throw res;
            }
            var responseBody = await res.json();
            // console.log(this.KeyWord+"========================================================="+this.QuestionNumber);
            console.log(responseBody);
            return responseBody;
    }
   getQuery () {
       //console.log(this.QuestionNumber);
    //    console.log(this.KeyWord+"-------------------------------------------------------"+this.QuestionNumber);  
        if (this.QuestionNumber==20){
            return util.format(SparqlQueries.searchName, encodeURI(this.KeyWord));
        }
        if (this.QuestionNumber==21){
            return util.format(SparqlQueries.searchHigherP, encodeURI(this.KeyWord));
        }
        if (this.QuestionNumber==24){
            return util.format(SparqlQueries.searchBrand, encodeURI(this.KeyWord));
        }
        // if (this.QuestionNumber==22){
        //     return util.format(SparqlQueries.searchName, encodeURI(this.KeyWord));
        // }
        // if (this.QuestionNumber==23){
        //     return util.format(SparqlQueries.searchName, encodeURI(this.KeyWord));
        // }

        // else return util.format(SparqlQueries.membersByEmail, encodeURI(this.KeyWord));;
    }
}
module.exports.GraphdbHelper = GraphdbHelper;