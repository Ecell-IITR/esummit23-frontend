import Image from 'next/image';

export function EventsIdeathon(props) {
  const Ideathon = [
    { date: '12 December 2022' },
    {
      description:
        'The registration form will ask for a complete description of their idea according to the problem statement in maximum 200 words. The teams will also have to answer some basic questions. The selection process would be based on the following parameters:',
    },
    {
      summary: '1. The innovation in your idea',
    },
    {
      summary: '2. The real-world problem it mitigates',
    },
    {
      summary: ' 3. The market opportunity for the idea',
    },
    {
      summary: ' 4. The competitive advantage that it possesses',
    },
    {
      conclusion:
        'The ideas which qualify these basic criteria will be allowed to progress to the second round.',
    },
  ];

  const events = [
    {
      para: 'The ​Ideastorm is the annual case building competition organized by ​Entrepreneurship Cell, IIT Roorkee ​in its flagship event, the ​E-Summit.The Ideastorm has been spearheading this drive of the E-Cell, by providing a platform for the students to get excellent professional guidance from our experienced and distinguished ​Startup Mentors. The students then get the chance to present their business plan in front of ​Angel Investors ​and ​Industry Leaders',
    },
  ];
  const rules = [
    {
      rule: 'Each team consists of 2 or 4 members, who need not belong to the same organization.',
    },
    {
      rule: 'The decision of the judges shall be final and binding. E-Cell IIT Roorkee retains the right to evaluate all submissions and decide the eligibility criteria.',
    },
    {
      rule: 'Teams are expected to conduct any necessary research through publicly available resources. Use of all library resources, class textbooks, and websites is welcome as long as they are duly cited.',
    },
  ];
  const criteria = [
    {
      criteria:
        'Each team consists of 2 or 4 members, who need not belong to the same organization.',
    },
    {
      criteria:
        'The decision of the judges shall be final and binding. E-Cell IIT Roorkee retains the right to evaluate all submissions and decide the eligibility criteria.',
    },
    {
      criteria:
        'Teams are expected to conduct any necessary research through publicly available resources. Use of all library resources, class textbooks, and websites is welcome as long as they are duly cited.',
    },
  ];

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
      <div className='helpSecondContainer'>
        <div className='secondcontainer'>
          <div className='arrows'>
            <div className='vl'></div>
            <div className='firstarrow'>Round 1</div>
            <div className='helpVerticalLine'>
              <div className='verticalLine'></div>
            </div>
            <div className='helpArrow'>
              <div className='secondarrow'>Round 2</div>
            </div>
            <div className='helpVerticalLine'>
              <div className='verticalLine'></div>
            </div>
            <div className='vl1'></div>
            <div className='helpArrow'>
              <div className='thirdarrow'>Round 3</div>
            </div>
          </div>

          <div className='roundnamecontent'>
            <div
              className='triangleDate'
              dangerouslySetInnerHTML={{ __html: props?.round[0].tasks }}
            ></div>
          </div>
        </div>
      </div>
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
