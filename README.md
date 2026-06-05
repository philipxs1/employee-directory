The Task

Build an Employee Directory single-page application that loads employee data
from the provided JSON file and displays it as an interactive interface.
Requirements

1. Display a list of employees

• Load the data from the provided applicants.json file.

• Display each employee as a card showing their name, role, department,
status, and start date.

• Generate a placeholder avatar using the employee’s initials (e.g. “PS” for
Priya Sharma).

• The status field should be visually distinct for each status (Active, On Leave,
Probation) – e.g. using a coloured badge.


2. Search and filter
• Implement a search input that filters employees by name or role as the
user types.
• Implement a department filter dropdown.
• Search, filtering, and sorting must work cohesively – changing one
should not reset or conflict with the others. All active controls should
combine to produce the displayed results.

3. Sort
• Allow the user to sort the list by name (A–Z / Z–A) or by start date (Newest /
Oldest).
• The currently active sort option must be visually indicated.


4. Employee detail view

• When clicking on an employee card, display a detail view (modal, side
panel, or expanded card – your choice) showing the employee’s full details.


i took it step by step, unfortunately didn't get past the final of step 3

next steps after step 3 would be implementing use memo and creating a custom sort and filter hook.

installation: 
clone 
git clone https://github.com/your-username/employee-directory.git

Navigate to the project
cd employee-directory

install
npm install

run the server
npm run dev

that's it!