import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { TopicContainer } from './../shared/topic-container';

@Injectable()
export class TermsService {
  private URL: string = "https://api.mlab.com/api/1/databases/lifegems/collections/terms?apiKey=CY73dQUZRrVfx3SWzj77PZ8QbCk-6ilZ";

  constructor(private http: Http) { }

  addTerm(strTerm, strDefinition): Observable<TopicContainer[]> {
    let body = JSON.stringify({
      "name": strTerm,
      "description": strDefinition
    });
    console.log(body);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.URL, body, options)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  listTerms(): TopicContainer[] {
    return aTerms;
  }

  listAllTerms(): Observable<TopicContainer[]> {
    return this.http.get(this.URL)
      .map((res: Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}

const aTerms: TopicContainer[] = [
  {
    "name": "Anointed",
    "description": "A person chosen by God for a special purpose. Anointed Christians are the 144,000"
  },
  {
    "name": "Assignment of work",
    "description": "A specific work someone gives you to do"
  },
  {
    "name": "Attain",
    "description": "To work hard to get something. To attain the prize means to win the prize"
  },
  {
    "name": "Being known by Jehovah",
    "description": "Having Jehovah’s approval"
  },
  {
    "name": "Bible Students",
    "description": "Before 1931, Jehovah’s Witnesses were called Bible Students"
  },
  {
    "name": "Cast lots",
    "description": "This was a way to decide a question. Lots, or small pieces of wood or stone, were marked and then thrown on the ground or shaken in a container. A decision was made based on how the lots fell or on which lot was pulled out"
  },
  {
    "name": "Christendom",
    "description": "Religions that call themselves Christian but that do not follow the teachings of Christ"
  },
  {
    "name": "Cloud of witnesses",
    "description": "The many servants of God in the past who showed faith. Paul said that they were a large 'cloud.' There were so many that they could not be counted"
  },
  {
    "name": "Conscience",
    "description": "A sense of right or wrong that we have inside of us. It can stop us from doing wrong things, and it can make us do good things"
  },
  {
    "name": "Courting",
    "description": "The time that a couple use to get to know each other to decide if they should marry"
  },
  {
    "name": "Covenant",
    "description": "A serious promise or agreement"
  },
  {
    "name": "Counsel",
    "description": "Advice or instruction from the Bible"
  },
  {
    "name": "Disfellowship",
    "description": "To “remove the wicked man” or woman from the congregation"
  },
  {
    "name": "Endurance",
    "description": "When someone has endurance, he remains loyal to God even in difficult situations"
  },
  {
    "name": "Entangle",
    "description": "Clothing that entangles a runner wraps around his legs and makes him fall. If we allow the thinking of the world to make us lose faith, we will fall and we will not be able to finish our race"
  },
  {
    "name": "False teachers",
    "description": "False teachers, or apostates: People who rebel against true worship and abandon it"
  },
  {
    "name": "Gentile",
    "description": "A person who is not of the Jewish nation"
  },
  {
    "name": "God's day of rest",
    "description": "God’s day of rest: A period of thousands of years that Jehovah uses to complete his purpose for the earth and obedient humans"
  },
  {
    "name": "Illustration",
    "description": "An example that helps us to understand Bible truths"
  },
  {
    "name": "Imperfect",
    "description": "Someone who is imperfect makes mistakes, does things wrong"
  },
  {
    "name": "The issue of Jehovah’s sovereignty",
    "description": "The question of whether Jehovah has the right to rule"
  },
  {
    "name": "Kohathite Levite",
    "description": "Levite who served at the tabernacle. The Kohathites had the responsibility of carrying the ark of the covenant"
  },
  {
    "name": "Laws",
    "description": "Rules in the Bible that tell us what God says is right and wrong"
  },
  {
    "name": "Literal",
    "description": "Somthing you can see or touch is literal"
  },
  {
    "name": "Material things",
    "description": "Things such as money, food, and clothes"
  },
  {
    "name": "Meek",
    "description": "A meek person is gentle and patient. He accepts instructions and waits for Jehovah to act. He does not get angry easily"
  },
  {
    "name": "Mourning ones",
    "description": "Those who are sad or depressed or who are suffering"
  },
  {
    "name": "Negative emotions",
    "description": "Feelings such as fear, anxiety, or discouragement"
  },
  {
    "name": "Nephilim",
    "description": "Nephilim (Genesis 6:4): The children from wicked angels and women"
  },
  {
    "name": "Perceptive powers",
    "description": "Perceptive powers (Hebrews 5:14): The ability to think carefully about things and then choose between right and wrong"
  },
  {
    "name": "Prejudice",
    "description": "Unfair or unjust treatment"
  },
  {
    "name": "Principles",
    "description": "Basic truths from the Bible that help us to make good decisions"
  },
  {
    "name": "Ransom",
    "description": "The price Jehovah paid through Jesus to free humans from sin and death"
  },
  {
    "name": "Repent",
    "description": "To feel regret for past sins and to make the necessary changes to please God"
  },
  {
    "name": "Sabbath",
    "description": "Sabbath: The seventh day of the week and a day of rest from regular work for the Israelites"
  },
  {
    "name": "Sanctuary",
    "description": "A place of worship"
  },
  {
    "name": "Sanhedrin",
    "description": "A Jewish high court"
  },
  {
    "name": "Scroll",
    "description": "A roll of parchment, leather, or papyrus used by Bible writers"
  },
  {
    "name": "Secular work",
    "description": "A job or employment"
  },
  {
    "name": "Sexual immorality",
    "description": "Breaking God’s laws about sexual relations"
  },
  {
    "name": "Sympathy",
    "description": "Feeling sorry for those who suffer"
  },
  {
    "name": "Tabernacle",
    "description": "The tent used for worship in Israel. It was taken from place to place when the nation moved"
  },
  {
    "name": "Trial",
    "description": "Suffering, tribulation, a difficult situation that tests a person’s faith"
  },
  {
    "name": "Tribe of Judah",
    "description": "A tribe in Israel. Descendants of Judah, the son of Jacob"
  },
  {
    "name": "Undeserved kindness",
    "description": "Jehovah’s great kindness that he gives freely to sinful humans"
  },
  {
    "name": "Unrealities",
    "description": "Unrealities (1 Samuel 12:21): Things that people believe can help them but that cannot really make them happy and safe"
  },
];