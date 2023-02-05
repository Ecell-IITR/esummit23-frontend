import Image from 'next/image';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import {useState} from 'react';

export function EventsIdeathon(props) {
  const router = useRouter();
  const [rounder,setrounder] =  useState(0);
  // const [arrow,setarrow] = useState("helpArrow")
  return (
    <div className='containerEvents'>
      <div className='helpAboutContainer'>
        <div className='aboutContainer'>
          <div className='aboutHeading'>
            <h3 style={{ fontWeight: '700' }}>About {props.name}</h3>
          </div>

          <div className='aboutEvent'>
            <div
              className='aboutbox'
              dangerouslySetInnerHTML={{ __html: props?.desc }}
            ></div>

            <br></br>
            <br></br>
          </div>
        </div>
      </div>
        <>
          {' '}
          <div className={props.round[0]?.tasks==null ? "arrowDisplayNone" : "helpSecondContainer"}>
            <div className='secondcontainer'>
              <div className='arrows'>
                <div className='vl'></div>
                <div className='firstarrow' onClick={() => {
                      setrounder(0);
                    }}>Round 1</div>
                <div className='helpVerticalLine'>
                  <div className={props.round[1]?.tasks==null ? "arrowDisplayNone" : "verticalLine"}></div>
                </div>
                <div className={props.round[1]?.tasks==null ? "arrowDisplayNone" : "helpArrow"}>
                  <div
                    className='secondarrow'
                    onClick={() => {
                      // toast.error('Coming Soon!');
                      setrounder(1);
                      
                    }}
                  >
                    Round 2
                  </div>
                </div>
                <div className='helpVerticalLine'>
                  <div className={props.round[2]?.tasks==null ? "arrowDisplayNone" : "verticalLine"}></div>
                </div>
                <div className={props.round[2]?.tasks==null ? "arrowDisplayNone" : "vl1"}></div>
                <div className={props.round[2]?.tasks==null ? "arrowDisplayNone" : "helpArrow"}>
                  <div
                  className='thirdarrow'
                    onClick={() => {
                      // toast.error('Coming Soon!');
                      setrounder(2);
                    }}
                  >
                    Round 3
                  </div>
                </div>
              </div>

              <div className='roundnamecontent'>
                <div className='paragraph'>
                  <div
                    className='triangleDate'
                    dangerouslySetInnerHTML={{ __html: props?.round[rounder]?.tasks }}
                  ></div>
                </div>
              </div>
            </div>
          </div>{' '}
        </>
      <div className='helpRuleContainer'>
        <div className='rulecontainer'>
          <div className='ruleheading'>Rules and Regulation</div>
          <div className='rules'>
            {props.rules.map((rule, index) => {
              return (
                <div key={index} className='rulebox'>
                  <ul>
                    <div className='helpRules'>
                      <div className='rulesMentioned'>
                        <div className='bullets'>
                          <Image
                            src='/bulletEvents.webp'
                            height='16'
                            width='16'
                          ></Image>
                        </div>
                        <div className='writtenRules'>{rule.rule} </div>
                      </div>
                    </div>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className='helpRuleContainer'>
        <div className='criteriacontainer'>
          <div className='criteriaheading'>Eligibility Criteria</div>
          <div className='criteria'>
            {props.eligiblity.map((criteria, index) => {
              return (
                <div key={index} className='criteriabox'>
                  <ul>
                    <div className='rulesMentioned'>
                      <div className='bullets'>
                        <Image
                          src='/bulletEvents.webp'
                          height='16'
                          width='16'
                        ></Image>
                      </div>
                      <div className='writtenRules'>{criteria.rule} </div>
                    </div>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}


export default EventsIdeathon;
