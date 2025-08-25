import xlsx from 'xlsx';
import Student from '../models/user.model.js'; // Adjust path as needed

function generatePassword(name, email) {
    const namePart = (name || '').replace(/\s/g, '').substring(0, 4).padEnd(4, 'x');
    const emailPart = (email || '').replace(/\s/g, '').substring(0, 4).padEnd(4, 'x');
    return namePart + emailPart;
}

export const uploadExcel = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const workbook = xlsx.read(req.file.buffer, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const studentsData = xlsx.utils.sheet_to_json(sheet);

        const registeredStudents = [];
        for (const data of studentsData) {
            // Correctly check for the 'email' property (lowercase)
            if (!data.email) {
                console.warn("Skipping a row due to missing email:", data);
                continue;
            }
            const existingUser = await userModel.findOne({email});
            if(existingUser){
                // res.status(400).json({success:false, message:'User already exists Please use different email!'})
                console.log("Skipping existing user with email:", data.email);
                continue;
            }
            // Use the correct lowercase properties: 'name' and 'email'
            const password = generatePassword(data.name, data.email);
            
            const student = new Student({
                name: data.name,
                email: data.email,
                password: password, // You should hash this password in a real application
                linkedinId: data.linkedinId,
                role: 'Student'
            });
            await student.save();
            registeredStudents.push(student);
        }

        res.status(201).json({ message: 'Students registered successfully', students: registeredStudents });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(409).json({ message: 'Error: A duplicate email was found in the Excel file.', error: error.message });
        }
        res.status(500).json({ message: 'Error processing file', error: error.message });
    }
};