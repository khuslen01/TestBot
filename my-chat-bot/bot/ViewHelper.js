const {CardFactory} = require('botbuilder');
class ViewHelper {
    constructor(resultObject){
        this.body = resultObject;
        
    }
    seachBrand(){
        var dan = {
            "contentType": "application/vnd.microsoft.card.adaptive",
            "content": {
              "type": "AdaptiveCard",
              "version": "1.0",
              "body": [
                {
                  "type": "TextBlock",
                  "text": "*Sincerely yours,*"
                },
                {
                  "type": "TextBlock",
                  "text": "Adaptive Cards",
                  "separation": "none"
                }
              ],
              "actions": [
                {
                  "type": "Action.OpenUrl",
                  "url": "http://adaptivecards.io",
                  "title": "Learn More"
                }
              ]
            }
          }
          return dan;
    }
    searchHigherPrice(){
        var a = {
            "contentType": "application/vnd.microsoft.card.adaptive",
            "content": {
              "type": "AdaptiveCard",
              "version": "1.0",
              "body": [
                {
                  "type": "TextBlock",
                  "text": "*Sincerely yours,*"
                },
                {
                  "type": "TextBlock",
                  "text": "Adaptive Cards",
                  "separation": "none"
                }
              ],
              "actions": [
                {
                  "type": "Action.OpenUrl",
                  "url": "http://adaptivecards.io",
                  "title": "Learn More"
                }
              ]
            }
          }
          return a;
    }
    searchAll(){
        var product=[];
        for(var i=0;i<this.body.results.bindings.length;i++){
 
            var  a = this.body.results.bindings[i];
        var red={
            "contentType": "application/vnd.microsoft.card.adaptive",
            "content": {
              "type": "AdaptiveCard",
              "version": "1.0",
              "body": [
               {
                  "type": "TextBlock",
                  "text": "Хайсан брендийн нэр"+ " "+ a.Brand.value,
                  "size": "large"
                },
                {
                  "type": "TextBlock",
                  "text": "Барааны үнэ:"+ " "+a.Price.value + " "+ "төгрөг",
                },
                {
                  "type": "TextBlock",
                  "text": "Хэмжээ:"+ " "+a.Size.value,
                  "separation": "none"
                },
                
            ],
              "actions": [
                {
                  "type": "Action.OpenUrl",
                  "url": a.URL.value,
                  "title": "Барааны дэлгэрэнгүй линк рүү явах"
                }
              ]
            }
    }
    product.push(red);

}
return product;
    }
    createTest(){
        var instance = this.body.results.bindings[0]; 
        var ret = {
            "contentType": "application/vnd.microsoft.card.adaptive",
            "content": {
              "type": "AdaptiveCard",
              "version": "1.0",
              "body": [
                {
                  "type": "TextBlock",
                  "text": instance.Model.value,
                  "size": "large"
                },
                {
                  "type": "person",
                  
                  "tap": {
                    "type": "imBack",
                    "value": instance.Brand.value
                }
                },
                {
                  "type": "Image",
                    "url" : "https://cdn3.shoppy.mn/spree/images/904128/small/data."
                }
              ],
              "actions": [
                {
                  "type": "Action.OpenUrl",
                  "url": "https://pc-mall.mn/products/samsung-rb29fsrndsa-wt",
                  "title": "Дэлгэрэнгүй"
                },
                {
                    "type" : "Action.Submit",
                    "title": "Буцах"
                }
              ]
            }
          }
          
    return ret;
    }
    createDemo(){
        
        
        var i = this.body.results.bindings[0];
        var func = {
            "contentType": "application/vnd.microsoft.card.adaptive",
            "content": {
              "type": "AdaptiveCard",
              "version": "1.0",
              "body": [{
                    "type": "TextBlock",
                    "text": i.Brand.value,
                    "size": "large"
                    }   
                
                ]
            }
        }
        return func;
    }
    createTest1(){

        var i = this.body.results.bindings[0];
        var func = {
            "type": "AdaptiveCard",
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.2",
            "body": []
            
        };
        func.content["body"].push({
            "type": "person",
                    "id": "bi",
                    "title": "hay",
                    "subtitle": "sub",
                    // "tap": {
                    //     "type": "imBack",
                    //     "value": instance.department.value+"-"+instance.label1.value+" өрөөний дэлгэрэнгүй"
                    // }
        })
        return func;
    }
    createList(){
        var rete = 
        {
            "contentType": "application/vnd.microsoft.teams.card.list",
            "content": {
              "title": "Card title",
              "items": [
                {
                  "type": "file",
                  "id": "https://contoso.sharepoint.com/teams/new/Shared%20Documents/Report.xlsx",
                  "title": "Report",
                  "subtitle": "teams > new > design",
                  "tap": {
                    "type": "imBack",
                    "value": "editOnline https://contoso.sharepoint.com/teams/new/Shared%20Documents/Report.xlsx"
                  }
                },
                {
                  "type": "resultItem",
                  "icon": "https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Trello-128.png",
                  "title": "Trello title",
                  "subtitle": "A Trello subtitle",
                  "tap": {
                    "type": "openUrl",
                    "value": "http://trello.com"
                  }
                },
                {
                  "type": "section",
                  "title": "Manager"
                },
                {
                  "type": "person",
                  "id": "JohnDoe@contoso.com",
                  "title": "John Doe",
                  "subtitle": "Manager",
                  "tap": {
                    "type": "imBack",
                    "value": "whois JohnDoe@contoso.com"
                  }
                }
              ],
              "buttons": [
                {
                  "type": "imBack",
                  "title": "Select",
                  "value": "whois"
                }
              ]
            }
          }
          return rete;
    }
    zaOdoo(){
        var za = 
        {
            "type": "AdaptiveCard",
            "body": [
                {
                    "type": "TextBlock",
                    "size": "Medium",
                    "weight": "Bolder",
                    "text": "thfh"
                },
                
                {
                    "type": "TextBlock",
                    "text": "yum huma bichne",
                    "wrap": true
                },
                {
                    "type": "FactSet",
                    "facts": [
                        {
                            "$data": "zger",
                            "title": "l",
                            "value": "test"
                        }
                    ]
                }
            ],
            "actions": [
                {
                    "type": "Action.ShowCard",
                    "title": "Set due date",
                    "card": {
                        "type": "AdaptiveCard",
                        "body": [
                            {
                                "type": "Input.Date",
                                "id": "dueDate"
                            },
                            {
                                "type": "Input.Text",
                                "id": "comment",
                                "placeholder": "Add a comment",
                                "isMultiline": true
                            }
                        ],
                        "actions": [
                            {
                                "type": "Action.Submit",
                                "title": "OK"
                            }
                        ],
                        "$schema": "http://adaptivecards.io/schemas/adaptive-card.json"
                    }
                },
                {
                    "type": "Action.OpenUrl",
                    "title": "View",
                    "url": "https://pc-mall.mn/products/samsung-rb29fsrndsa-wt"
                }
            ],
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.3"
        }
          return za;
    }
    
    
}
module.exports.ViewHelper = ViewHelper;