import React from 'react';
// ...other imported stuff

const Posts = [
    {
        id: 1,
        title: 'Collusion with Russia',
        description: 'Members of Trump family met with Russian representatives to discuss tactics to win the election in exchange for favours for Russia.',
        Impeachment: 9,
        Illegality: 6,
        Involvement: 5,
        Media: 9,
        Link: ('https://www.theguardian.com/us-news/trump-russia-inquiry'),
        thumb: ('/image/trumprussia.jpg'),
    },
    {
        id: 2,
        title: 'Sexual-Assault Allegations',
        description: 'Current tally stands at 20 women accusing Trump of sexual assault. His main defense was to insinuate the women were far too unattractive.',
        Impeachment: 6,
        Illegality: 10,
        Involvement: 10,
        Media: 4,
        Link: ('https://www.vox.com/policy-and-politics/2018/3/26/17151766/summer-zervos-case-trump-lawsuit-sexual-assault-allegations'),
        thumb: ('/image/sexualassault.png'),
    },
    {
        id: 3,
        title: 'Michael Cohen Bribery Scandal ',
        description: 'His fixer and "personal lawyer" accepting money for favours and time with Trump.',
        Impeachment: 9,
        Illegality: 8,
        Involvement: 7,
        Media:  4,
        Link: ('https://qz.com/1287027/a-timeline-of-donald-trump-associates-elliott-broidy-and-michael-cohens-payments-from-foreign-countries/'),
        thumb: ('/image/Michael-Cohen.png'),

    },
    {
        id: 5,
        title: 'Tax Return Lies',
        description: 'Filing false tax returns in order to hide payments such as those to buy the silence of porn stars for extra marital affairs.',
        Impeachment: 5,
        Illegality: 9,
        Involvement: 7,
        Media:  2,
        Link: ('https://www.forbes.com/sites/peterjreilly/2018/03/10/130000-to-stormy-daniels-solid-deduction-for-michael-cohen-donald-trump-not-so-much/#45e13fcf68d3'),
        thumb: ('/image/trump-tax-returns.jpg'),

    },

    {
        id: 6,
        title: 'Trump University  ',
        description: 'A con of a university where victims paid up to $35,000 to learn his "real estate secrets".  Students successfully sued after it failed to deliver anything promised. ',
        Impeachment: 2,
        Illegality: 5,
        Involvement: 8,
        Media:  5,
        Link: ('https://www.usatoday.com/story/news/politics/onpolitics/2018/04/10/trump-university-settlement-judge-finalized/502387002/'),
        thumb: ('/image/TRUMPUNI.jpg'),
    },
    {
        id: 7,
        title: 'Racial Discrimination',
        description: 'Trump followed the family tradition of racial discrimination when refusing to rent properties to African Americans in the 70s and 80s.',
        Impeachment: 1,
        Illegality: 7,
        Involvement: 7,
        Media:  5,
        Link: ('https://www.npr.org/2016/09/29/495955920/donald-trump-plagued-by-decades-old-housing-discrimination-case'),
        thumb: ('/image/fredanddonald.png'),
    },
    {
        id: 8,
        title: 'Conflicts of Interest',
        description: 'Jimmy Carter gave up his peanut farm on becoming President for fear of conflicts. Donald Trump reportedly recently asked the President of Panama for help opening a new Trump hotel.',
        Impeachment: 7,
        Illegality: 3,
        Involvement: 9,
        Media: 5,
        Link:('https://www.cnbc.com/2018/01/16/donald-trumps-properties-reveal-unprecedented-conflicts-of-interest-warns-public-citizen-report.html'),
        thumb: ('image/trumphotel.png'),

    },
    {
        id: 9,
        title: 'Obama Racism / Birther-ism',
        description: 'The main proponent of pretending Obama was born in another country with his now familiar "some people are saying.." method.',
        Impeachment: 2,
        Illegality: 1,
        Involvement:  10,
        Media: 8,
        Link:('https://www.vox.com/policy-and-politics/2017/11/29/16713664/trump-obama-birth-certificate'),
        thumb:('image/birthertrump.jpg'),

    },

    {
        id: 10,
        title: 'Prosecution of Paul Manafort',
        description: 'Previously a paid lobbiest for Ukranian oligarchs connected to Putin and Angolian warlords, and now facing charges related to colluding with Russia to affect the 2016 election.',
        Impeachment: 8,
        Illegality: 8,
        Involvement: 4,
        Media: 8,
        Link:('https://www.vox.com/policy-and-politics/2017/11/29/16713664/trump-obama-birth-certificate'),
        thumb: ('/image/3-manafort.jpg'),
    },
    {
        id: 11,
        title: 'Being "John Miller" ',
        description: 'Trump caught calling up a magazine pretending to be a PR man called John Miller to let the magazine know what a great, great guy The Donald is and how all the women love him.',
        Impeachment: 1,
        Illegality: 2,
        Involvement: 10,
        Media: 2,
        Link: ('https://www.msnbc.com/all-in/watch/audio-shows-trump-pretending-to-be-spokesman-685553731627'),
        thumb:('/image/JohnMiller.jpeg'),

    },
    {
        id: 12,
        title: 'The Continued Existence of Jared Kushner',
        description: 'Senior Advisor to the President and son of a convicted felon. Unable to get basic security clearance for ten months of Trump presidency but still present at top level meetings. ',
        Impeachment: 5,
        Illegality: 8,
        Involvement: 3,
        Media: 4,
        Link: ('https://www.vox.com/policy-and-politics/2018/3/1/17053398/jared-kushner-scandals-russia-clearance-loans'),
        thumb:('/image/kushner.jpg'),

    },
    {
        id: 13,
        title: 'Tax Fraud Scheme',
        description: 'In the mid 80s Trump frequently sent empty jewellery boxes out of state as a tax avoidance scheme, and then testified against those he had colluded to break the law with.',
        Impeachment: 1,
        Illegality: 10,
        Involvement: 9,
        Media: 3,
        Link: ('https://www.c-span.org/video/?c4641954/trump-empty-box-scam'),
        thumb:('/image/jewellery.png'),
    },

    {
        id: 14,
        title: 'Central Park 5',
        description: 'With familiar racist undertones, Trump took out newspaper adverts to call for the death sentence for 5 young black teenagers that later proved entirely innocent. Trump refused to apologise and refused to believe the DNA evidence.',
        Impeachment: 1,
        Illegality: 2,
        Involvement: 10,
        Media: 4,
        Link: ('https://www.theguardian.com/us-news/2016/feb/17/central-park-five-donald-trump-jogger-rape-case-new-york'),
        thumb:('image/centralpark5.jpg'),

    },

    {
        id: 15,
        title: 'Illicit Iran Deal Research',
        description: 'In an effort to discredit the Iran deal to help boost the Saudi friends, Trump reportedly backed research into the families and private lives of people involved with the deal in a desperate effort to discredit it.',
        Impeachment: 8,
        Illegality: 7,
        Involvement: 5,
        Media: 2,
        Link: ('https://www.theguardian.com/world/2018/may/07/donald-trump-iran-nuclear-deal-trita-parsi-us-intelligence-warning'),
        thumb:('image/iran.png'),

    },

    {
        id: 16,
        title: 'Shady Saudi Deals',
        description: 'The nuanced position of the US in the Middle East was thrown out at the start of the Trump administration in favour of a strongly Pro Saudi and anti Iran line. Coincidentally, numerous ties with Trump and Saudi money have since surfaced.',
        Impeachment: 8,
        Illegality: 4,
        Involvement: 7,
        Media: 3,
        Link: ('https://edition.cnn.com/2018/03/23/opinions/trump-bin-salman-relationship-robertson-opinion-intl/index.html'),
        thumb:('/image/trumpsaudi.png'),

    },
    {
        id: 17,
        title: 'Miss Teen USA  ',
        description: 'Trump boasted on the Howard Stern show about walking into changing rooms during beauty contests, but 5 contestants (15-16) of Miss Teen USA have given accounts of how that include teen beauty contests.',
        Impeachment: 2,
        Illegality: 7,
        Involvement: 7,
        Media: 2,
        Link: ('http://www.politifact.com/wisconsin/article/2016/oct/18/allegations-about-donald-trump-and-miss-teen-usa-c/'),
        thumb:('/image/missteen.png'),

    },
    {
        id: 18,
        title: 'Self Pardoning ',
        description: 'With a weak understanding of the constitution, Trump previously asserted on Twitter he would be free to commit any crime by pardoning himself. Once tested by Nixon and failed.',
        Impeachment: 8,
        Illegality: 7,
        Involvement: 7,
        Media: 6,
        Link: ('https://www.washingtonpost.com/gdpr-consent/?destination=%2fopinions%2fif-trump-pardons-himself-hes-admitting-hes-guilty-of-impeachable-crimes%2f2018%2f06%2f08%2fda96d98a-6a94-11e8-9e38-24e693b38637_story.html%3f&utm_term=.8f3f61059592'),
        thumb:('/image/guliani.png'),

    },
    {
        id: 19,
        title: 'Mulitple Bankruptcies',
        description: 'Surely one of the few business people able to lose money running casinos, now promising to do to America what he did in business.',
        Impeachment: 2,
        Illegality: 3,
        Involvement: 9,
        Media: 7,
        Link: ('http://www.newsweek.com/2016/08/12/donald-trumps-business-failures-election-2016-486091.html'),
        thumb:('/image/bankcrupt.png'),

    },

]

export default Posts;
