
const headerStyles = "font-weight: bold; font-size: 14px; color: #09090b; text-align: left; padding: 10px 5px; border: 1px solid #e0e0e0; ";
const bodyStyles = "font-weight: normal; font-size: 16px; color: #27272a; text-align: left; padding: 10px 5px; border: 1px solid #e0e0e0;";

export const getTemplate = (data) => {

    return `
        <table style="border-collapse: collapse;">
            <thead>
                <tr>
                    <th style="${headerStyles}">Email</th>
                    <th style="${headerStyles}">Name</th>
                    <th style="${headerStyles}">Message</th>
                </tr>
            </thead>
            <tbody>
                 <tr>
                    <td style="${bodyStyles}">${data.email}</td>
                    <td style="${bodyStyles}">${data.name}</td>
                    <td style="${bodyStyles}">${data.message}</td>
                </tr>
            </tbody>
    </table>
    `;
}