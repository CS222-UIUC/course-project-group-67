# course-project-group-67
course-project-group-67 created by GitHub Classroom

(a) Summary of presentation introduction 

Our project is called Netflix Wrapped. There are over 223 million Netflix users in the world and each user spends a little 3.23 hours per day on average. As the end of the year is coming around, finding out one's stats in relation to viewing history for Netflix would be interesting to see visually, especially because Spotify has had such smashing success and popularity from it's end-of-year-recap counterpart, Spotify Wrapped. From total minutes watched to top movies/tv shows, our project uses data pulled from the user's inputted Netflix Viewing Activity file to provide a cohesive report of what their past year has been like. The report is then displayed back to the user as a chart where the user can see how much time they spent on Netflix and the breakdown of how they spent that time. 

(b) Describes technical architecture 

Netflix Wrapped consists of various components such as the frontend with React and data analytics through data parsing. All the computation for analysis is done by behind the scenes Javascript. It asks the user to input their viewing history csv file, and comes up with statistics after reading and filtering through the input data to find trends. Using the database to identify common shows, other viewers that had similar viewing history were recommended the same shows to the user. 

(c) Provides reproducible installation instructions 

To install and run the program, all the user needs to do is clone the GitHub repository and run the application on their local host (npm start), with one of the attached Netflix CSVs as the input. The application will take the CSV, parse it, analyze it, and form statistics for the user to visualize how they've been spending their time on Netflix. 

(d) Group members and their roles

Achintya Sanjay - Data parsing

Anwesha Mishra - Statistic calculation

Ayushe Nagpal - Front-end set up and creation

Sneha Mohan - Front-end creation, data filtering and statistic calculation, data display and formatting