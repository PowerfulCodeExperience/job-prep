-- Create tables in database

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  authId TEXT NOT NULL,
  profileName TEXT,
  firstName TEXT NOT NULL,
  lastName TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  location TEXT,
  picture TEXT
);

CREATE TABLE IF NOT EXISTS goals (
  id SERIAL PRIMARY KEY,
  goal TEXT,
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  task TEXT,
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS users_companies (
  id SERIAL PRIMARY KEY,
  companyName TEXT,
  companyLinkedIn TEXT,
  user_id INTEGER REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS contact (
  id SERIAL PRIMARY KEY,
  firstName TEXT,
  lastName TEXT,
  position TEXT,
  linkedIn TEXT,
  status TEXT,
  email TEXT,
  dateContacted DATE,
  notes TEXT,
  outcome TEXT,
  company_id INTEGER REFERENCES users_companies(id)
);

CREATE TABLE IF NOT EXISTS resources (
  id SERIAL PRIMARY KEY,
  type TEXT,
  source TEXT,
  title TEXT,
  link TEXT
);

CREATE TABLE IF NOT EXISTS application_actions (
  id SERIAL PRIMARY KEY,
  action TEXT,
  application_id INTEGER REFERENCES contact(id) 
);

-- Drop Tables --

-- DROP TABLE IF EXISTS users

-- DROP TABLE IF EXISTS goals

-- DROP TABLE IF EXISTS contact

-- DROP TABLE IF EXISTS users-companies

-- Drop TABLE IF EXISTS resources

-- INSERT INTO resources (type, source, title, link) VALUES 
-- ('video', 'youtube',  'Creating an Effective Resume', 'https://www.youtube.com/watch?v=Gn-CeiF_B8s'),
-- ('video', 'youtube', 'Optimizing Your LinkedIn Profile', 'https://www.youtube.com/watch?v=ykEp2Gh5uFY'),
-- ('video', 'youtube', 'Making Connections on LinkedIn', 'https://www.youtube.com/watch?v=zN7nI9629IE'),
-- ('video', 'youtube', '20 Company Challenge Part 1', 'https://www.youtube.com/watch?v=6RW8gMLzHSc'),
-- ('video', 'youtube', '20 Company Challenge Part 2', 'https://www.youtube.com/watch?v=NGuS8iJbKgM'),
-- ('video', 'youtube', '20 Company Challenge Part 3', 'https://youtu.be/xRoTWaEW-Js'),
-- ('video', 'tedtalks', 'Your Body Language Shapes Who You Are - Power Poses - TedTalk', 'https://www.ted.com/talks/amy_cuddy_your_body_language_shapes_who_you_are?language=en'),
-- ('template', 'portfolio', 'SquareSpace', 'https://www.squarespace.com/'),
-- ('template', 'portfolio', 'Wix', 'https://www.wix.com/'),
-- ('template', 'portfolio', 'WordPress', 'https://wordpress.com/'),
-- ('template', 'portfolio', 'Start Bootstrap', 'https://startbootstrap.com/'),
-- ('template', 'portfolio', 'HTML5 UP', 'https://html5up.net/'),
-- ('template', 'portfolio', 'Pixelarity', 'https://pixelarity.com/'),
-- ('template', 'portfolio', 'Unsplash', 'https://unsplash.com/'),
-- ('template', 'portfolio', 'Mazwai', 'http://mazwai.com/#/'),
-- ('article', 'medium', 'How to Win the Coding Interview', 'https://blog.devmastery.com/how-to-win-the-coding-interview-71ae7102d685'),
-- ('article', 'medium', 'A Developer Guide to Interviewing', 'https://medium.freecodecamp.org/how-to-interview-as-a-developer-candidate-b666734f12dd'),
-- ('article', 'rightattitudes', 'STAR Technique to Answering Interview Questions', 'http://www.rightattitudes.com/2008/07/15/star-technique-answer-interview-questions/'),
-- ('article', 'medium', 'Career Advice No One Tells You', 'https://medium.com/the-mission/career-advice-no-one-tells-you-8be1bcd330cb'),
-- ('article', 'twilio', 'Salary Negotiation and Job Hunting for Developers', 'https://www.twilio.com/blog/2016/02/patrick-mckenzie-on-salary-negotiation-job-hunting.html'),
-- ('article', 'inc', '7 Questions Only the Smartest Job Candidates Ask', 'https://www.inc.com/jeff-haden/7-insightful-questions-only-the-best-job-candidates-think-to-ask.html'),
-- ('article', 'forbes', 'How To Get Hired Without Going Through HR', 'https://www.forbes.com/sites/lizryan/2016/09/12/how-to-get-hired-without-going-through-hr/#7cf2ff524490' ),
-- ('article', 'linkedin', 'Publishing on LinkedIn', 'https://linkedin.app.box.com/v/swe' ),
-- ('article', 'skillcrush', 'Need a Job? Add These 5 Pretend Projects to Your Portfolio', 'https://skillcrush.com/2014/08/11/portfolio-advice-2/' ),
-- ('article', 'themuse', 'The Free LinkedIn Tool That will Make It So Much Easier to Connect With Awesome People', 'https://www.themuse.com/advice/the-free-linkedin-tool-thatll-make-it-so-much-easier-to-connect-with-awesome-people?utm_medium=email&utm_campaign=daily_20160808&utm_source=blueshift&utm_content=daily_monday&bsft_eid=9772bfc8-a067-471d-b88f-7f40b1751c18&bsft_clkid=96ad1ddd-ffda-45c6-a025-4866706fc736&bsft_uid=697dbd29-5f9c-4b33-8421-eb7573c15a6d' ),
-- ('article', 'medium', 'How to Land Your First Dev Job even if you do not have a CS Degree', 'https://medium.com/swlh/how-to-land-your-first-dev-job-even-if-you-don-t-have-a-cs-degree-e83d08db4615' ),
-- ('article', 'tutorialspoint', 'Angular JS Interview Questions', 'https://www.tutorialspoint.com/angularjs/angularjs_interview_questions.htm' ),
-- ('article', 'linkedin', 'The Power of the Informational Interview: Turning the Tables in Your Favor', 'https://www.linkedin.com/pulse/20140814170534-9661775-the-power-of-the-informational-interview-turning-the-tables-in-your-favor?trk=hp-feed-article-title-like' ),
-- ('article', 'entrepreneur', 'How LinkedIn Has Helped Kill Cold Calling Once and for All', 'https://www.entrepreneur.com/article/270375?utm_campaign=Sumome_share&utm_medium=Sharebar&utm_source=Social' ),
-- ('article', 'inc', 'How I Got Interviews at Facebook, Google, Apple, and Uber in One Week', 'https://www.inc.com/jake-newfield/how-i-got-interviews-at-facebook-google-apple-and-uber-in-one-week.html' ),
-- ('article', 'intellipaat', 'iOS Interview Questions -- Study Guide', 'https://intellipaat.com/interview-question/ios-interview-questions/?utm_source=AS_iosQ%2FA%20LinkedIn&utm_medium=Posting&utm_campaign=AS_iosQ%2FA%20LinkedIn%20Posting' ),
-- ('googleDocs', 'Cahlan Sharp', 'JavaScript Code Interview Questions -- Study Guide', 'https://docs.google.com/document/d/1kkMHPLrC1iI0nBFMkFp-yKFbwDJKHjtZv5Yjt-7_qTI/edit' ),
-- ('article', 'entrepreneur', 'How to Immediately Connect with Anyone', 'https://www.entrepreneur.com/article/269990' ),
-- ('article', 'linkedin', 'The Depressing Truth About Applying To Jobs Online', 'https://www.linkedin.com/pulse/depressing-truth-applying-jobs-online-j-t-o-donnell?trk=hp-feed-article-title-like' ),
-- ('article', 'forbes', 'Three Steps To Writing The Perfect LinkedIn Summary', 'https://www.forbes.com/sites/williamarruda/2014/09/07/three-steps-to-writing-the-perfect-linkedin-summary/#1ccd711b5fbf' ),
-- ('article', 'skillcrush', 'Tips for Cover Letters', 'https://skillcrush.com/2016/01/25/16-secrets-to-help-write-a-cover-letter/?utm_campaign=newsletter_jan_16&utm_source=hs_email&utm_medium=email&utm_content=25594332&_hsenc=p2ANqtz-_7XqgJ8pTSXiUvqcYLLmIlMaFELGRx7rOLLqZytA1B5jXEpxYugw3n1u0ko44nufjEn64IFhOUPKvQHCkV5YBLJDGVFQ&_hsmi=25594333' ),
-- ('article', 'skillcrush', '12 Tips for First Year Freelancing', 'https://skillcrush.com/2016/02/02/earn-more-money-freelancing-for-beginners/?utm_campaign=newsletter_jan_16&utm_source=hs_email&utm_medium=email&utm_content=25838557&_hsenc=p2ANqtz-_hdULDtmDXDOA8UA6Lfczg5MSo_7G98lW5nAXHhUP0yBAoCv4qHfee3B3I16u9ICJDStWlegUvZQTfCjUBjiOQLxfyfw&_hsmi=25838557' ),
-- ('article', 'skillcrush', 'How Much to Charge Freelancing', 'https://skillcrush.com/2015/06/25/make-more-money-freelancing/' ),
-- ('article', 'levo', '5 TEDx Talks That Will Help You Strike Up A Conversation With Anyone', 'https://www.levo.com/posts/ted-talks-networking' ),
-- ('article', 'devchat', 'Finding a Job After a Bootcamp -- JavaScript Jabber Podcast', 'https://devchat.tv/js-jabber/180-jsj-finding-a-job' ),
-- ('article', 'linkedin', 'Hired or Fired in 90 Seconds: A Key Fix for Your Next Job Interview', 'https://www.linkedin.com/pulse/hired-fired-90-seconds-key-fix-your-next-job-logan-mallory?trk=hp-feed-article-title-like' ),
-- ('article', 'linkedin', 'How I Hire: My Guiding Principles', 'https://www.linkedin.com/pulse/how-i-hire-my-guiding-principles-angela-ahrendts' ),
-- ('article', 'mattermark', 'The One Method I have Used to Eliminate Bad Tech Hires', 'https://mattermark.com/the-one-method-ive-used-to-eliminate-bad-tech-hires/?utm_campaign=Mattermark+Daily&utm_source=hs_email&utm_medium=email&utm_content=23020610&_hsenc=p2ANqtz-8uCus9pgtQ-jAKTR6JHUBvXgEkh1uRKE1jXPEBge15imC1AB55rVT_0KbUzRCJyFVhNx5n6I0XFkR9GTZLyeS-J0vEGA&_hsmi=23020610' ),
-- ('article', 'qz', 'Imposter Syndrome is A Sign of Greatness', 'https://qz.com/606727/is-imposter-syndrome-a-sign-of-greatness/' ),
-- ('article', 'qualtrics', 'Quick tips for your LinkedIn Profile', 'https://www.qualtrics.com/blog/your-linkedin-profile-making-it-work-for-you/?utm_content=buffereef4d&utm_medium=social&utm_source=linkedin.com&utm_campaign=buffer' ),
-- ('article', 'linkedin', 'The Secret to Living is Giving', 'https://www.linkedin.com/pulse/my-life-outside-work-time-i-had-0-name-tony-robbins?trk=hp-feed-article-title-ppl-follow' ),
-- ('article', 'forbes', '16 Wise Ways To Build Your Brand In 2016', 'https://www.forbes.com/sites/williamarruda/2016/01/10/16-wise-ways-to-build-your-brand-in-2016/?_lrsc=71ce9490-b28b-4373-ab24-086eb29d2019&utm_source=social&utm_medium=leap&utm_campaign=linkedin&src=li-leap#44a57cc055fe' ),
-- ('article', 'businessinsider', 'The Power of Cold Emails', 'http://www.businessinsider.com/ex-googler-turned-ceo-asks-every-employee-to-cold-email-their-idol-2016-3' ),
-- ('article', 'benjaminhardy', '10 Books You Can Not Just Read Once', 'https://benjaminhardy.com/10-books-you-cant-read-just-once/' ),
-- ('article', 'themuse', 'All-Star LinkedIn Users Are 40 Times More Likely to Get Contacted -- Here is How to Score That Rating', 'https://www.themuse.com/advice/allstar-linkedin-users-are-40-times-more-likely-to-get-contactedheres-how-to-score-that-rating' ),
-- ('article', 'skillcrush', 'The Ultimate Guide to Becoming A Front End Web Developer', 'https://skillcrush.com/wp-content/uploads/2016/07/TheUltimateGuidetoBecomingaFrontEndDeveloper.pdf?utm_campaign=Front_End_Developer_Focus&utm_medium=email&_hsenc=p2ANqtz-_y2-5BpMI-KejpW6A1Uwivt_bnQaGxVucG5CZHvUmnR9UZbiKyuf9v0wHYL3sJzPnWVcXd8fmmaWLk0MxaEi_38NPUIA&_hsmi=31406356&utm_content=31406356&utm_source=hs_email&hsCtaTracking=d8a58fc5-aca8-4ca5-827d-f4685ca07aef%7C101c0477-3853-4453-b0f1-35482eaef59b' ),
-- ('article', 'galvanize', '10 Ways Coding Bootcamp Graduates Can Stand Out, Attract Employers and Get Hired', 'http://blog.galvanize.com/10-ways-bootcamp-grads-can-land-programming-jobs/#.V4QUyJMrKRs' ),
-- ('article', 'entrepreneur', '50 Quotes With the Power to Motivate You to Do Anything', 'https://www.entrepreneur.com/article/281264' ),
-- ('article', 'entrepreneur', '18 Tips to Create Your Perfect LinkedIn Profile', 'https://www.entrepreneur.com/article/271919' ),
-- ('article', 'themuse', 'The 3 Vital Steps to Getting a Hiring Managers Attention on LinkedIn', 'https://www.themuse.com/advice/the-3-vital-steps-to-getting-a-hiring-managers-attention-on-linkedin?utm_medium=email&utm_campaign=daily_20160824&utm_source=blueshift&utm_content=daily_wednesday&bsft_eid=025c7d91-a976-44b0-94fb-5404f0ff395b&bsft_clkid=69d509f2-7aa8-44fb-b698-d65a20c565a5&bsft_uid=697dbd29-5f9c-4b33-8421-eb7573c15a6d' ),
-- ('article', 'themuse', 'How to Make Your Cover Letter Stand Out', 'https://www.themuse.com/advice/even-people-who-hate-writing-can-make-their-cover-letter-stand-out?utm_medium=email&utm_campaign=daily_20160908&utm_source=blueshift&utm_content=daily_thursday&bsft_eid=b01d783f-f7a0-4333-b588-69205ab98f95&bsft_clkid=d3fb6a42-7985-44b3-8866-a5778e56866d&bsft_uid=697dbd29-5f9c-4b33-8421-eb7573c15a6d' ),
-- ('article', 'harvardbusinessreview', 'Why You Should Always Go Off-Script in a Job Interview', 'https://hbr.org/2016/07/why-you-should-always-go-off-script-in-a-job-interview?utm_source=twitter&utm_medium=social&utm_campaign=harvardbiz' ),
-- ('article', 'themuse', 'How to Expand Your Job Search When You have Exhausted All Other Options', 'https://www.themuse.com/advice/how-to-expand-your-job-search-when-youve-exhausted-all-the-options?ref=recommended' ),
-- ('article', 'businessinsider', 'Googles former HR Boss Says This is the Key to a Perfect Resume', 'http://www.businessinsider.com/laszlo-bock-gives-key-to-perfect-resume-2016-10' ),
-- ('article', 'cio', 'How to Crack the Coding Challenge', 'https://www.cio.com/article/3139449/developer/how-to-crack-the-coding-challenge.html' ),
-- ('googleDocs', 'Jeremy', 'Post-grad Roadmap: Immersive', 'https://docs.google.com/document/d/10gjpjAOJPg8KxOwLb6zz0lRvjHo71TDhnc1_XMcHqxg/edit'),
-- ('googleDocs', 'Jeremy', 'Jop Prep 2', 'https://docs.google.com/document/d/1BIyW2ou2G-Kj8wE0wPocWENbzrhrxe762ySwBwgcrgI/edit'),
-- ('example', 'linkedIn', 'Cleber Albuquerque', 'https://www.linkedin.com/in/cleberlop/' ),
-- ('example', 'linkedIn', 'Brett Caudill', 'https://www.linkedin.com/in/brettcaudill/' ),
-- ('example', 'linkedIn', 'Wyatt Johnny', 'https://www.linkedin.com/in/wyattjohnny/' ),
-- ('example', 'linkedIn', 'Jeff Chapman', 'https://www.linkedin.com/in/chapmanjeffrey/' ),
-- ('example', 'resume', 'Matt Guenther', 'http://mattguenther.com/');

-- INSERT INTO goals (goal, user_id) VALUES
-- ('Apply to an average of 3 jobs per day. Research each job and customize my resume to each job.', 8),
-- ('Code and average of 4 hours per day. As well as review Toy problems and practice whiteboarding', 8),
-- ('Finish a new portfolio piece every 2 weeks', 8),
-- ('Reach out to 4 people on Linkedin every day', 8),
-- ('Tell all relatives and friends that I am looking for a job and ask for referrals', 8),
-- ('Tour 2 companies offices per week', 8),
-- ('Apply to 5 jobs outside of target search area per week', 8),
-- ('Attend 2 meetups/ Networking events per week', 8);

