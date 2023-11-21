
        const userForm = document.querySelector('form');

        const retrieveEntries = () => {
            let entries = localStorage.getItem('userEntries');
            if (entries) {
                entries = JSON.parse(entries);
            } else {
                entries = [];
            }
            return entries;
        };

        const displayEntries = () => {
            const entries = retrieveEntries();

            const tableEntries = entries.map((entry) => {
                const nameCell = `<td>${entry.name}</td>`;
                const emailCell = `<td>${entry.email}</td>`;
                const passwordCell = `<td>${entry.password}</td>`;
                const dobCell = `<td>${entry.dob}</td>`;
                const t_cCell = `<td>${entry.t_c ? 'Yes' : 'No'}</td>`;
                const row = `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${t_cCell}</tr>`;
                return row;
            }).join("\n");

            const table = `<table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Dob</th>
                    <th>Accepted Terms?</th>
                </tr>
                ${tableEntries}
            </table>`;

            let details = document.getElementById('user-entries');
            details.innerHTML = table;
        };

        const saveUserForm = (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const dob = document.getElementById('dob').value;
            const t_c = document.getElementById('acceptedTerms?').checked;

            const entry = {
                name: name,
                email: email,
                password: password,
                dob: dob,
                t_c: t_c
            };
            let userEntries = retrieveEntries();

            userEntries.push(entry);

            localStorage.setItem('userEntries', JSON.stringify(userEntries));
            displayEntries();
        };


        userForm.addEventListener('submit', saveUserForm);
        displayEntries();
        if (!localStorage.getItem('userEntries')) {
            localStorage.setItem('userEntries', JSON.stringify([]))};

