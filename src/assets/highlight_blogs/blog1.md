A Force Sensing Table Technology Next-Gen Software
A web-based application for the new fstt system, led by Seneca research team.
/fstt_ui.png
Sep 12, 2024
# Force Sensing Table Technology Next-Gen Software.
###### Sep 11, 2024
A web-based application for the new fstt system, led by Seneca research team.

![fstt-ui](./fstt_ui.png)

---

### About the project

At my previous position, I was primarily responsible for the continuation of an ongoing project by adding new features and addressing bugs. There are weekly status meeting (and rarely, onsite) with the client to provide updates on my progress and discuss any new requirements. I mainly worked with React, Redux, WebSocket, Git, and NodeJS, with data stored locally on the file system.

In addition to the client’s task list, I was assigned with development of a proof of concept for a mobile version of the application. After thorough discussions with my manager, I chose to implement this using Progressive Web App technology to create a seamless and efficient mobile experience while leveraging the existing codebase.

Here is an example of the tasks I completed, a performance issue with the charting library.

### The work

One of the main UI components is a line chart that draws live data received from a sensor, hooked to the NodeJS server. A working session spans from 5 seconds to 1 minute. Sample rate is capped at 200 per second, chopped into 20 chunks sent in interval of 50ms to reduce client load.

![how it should works](./demo.png)

For lower durations, the graph performed as expected. For longer sessions (threshold vary with different devices), the graph would shown weird visual anomalies that didn’t reflect actual data.

![the first problem](./problem_1.png)

The assumption was either the graph took too long to render due to misuse or due to its implementation (way less likely) or some processing logic took too long. A look at the profiling tool shows that the chart component took 4.8ms to render on average.

![profiling tool](./profiling_tool.png)

With 20 chunks a second, that left the available time of 50ms each frame, so some processing logic was eating up most of the resource and somehow causes the incoming data to be corrupted. But those logics can’t be changed, the next best thing was changing the chart library.

Swapping in another chart library causes another UI problem, inconsistent with the original problem.

![comparing charts](./comparing_charts.png)

Welp.

### The solution

While troubleshooting, I wrote a tiny custom [tracer code](https://wiki.c2.com/?TracerBullets) to replace the current graph library using HTML Canvas for testing. Turns out, that solved the problem, even for the maximum duration sessions.

![a custom chart using canvas element](./custom_solve.png)

Great! But the new component did not have all the bells and whistles like tooltips, responsiveness, interactions that end-users wanted to see after a session is over. So, the path forward was to use the new graph for live session and swap out to the old graph after the session is done.

This worked because the server always store the complete data for the graph and rendering the whole graph at once did not cause the same problem.

![another small bug](./problem_2.png)

### What I have learned

It was my first significant bug in a medium-sized project that I was still learning at the time. I got to apply my debugging skill to successfully narrow down the problem, find possible bottlenecks, and create solutions. Working extensively with charting libraries helped further my understanding to a point where I could build some of its features from scratch and integrated it with an existing project.