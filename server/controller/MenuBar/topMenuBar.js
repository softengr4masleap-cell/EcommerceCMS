import topmenubar from "../../model/MenuBar/topmenubar.js";

export const createTopMenuBar = async (req, res) => {
    const { email, contact } = req.body;
    try {
        const existingEntry = await topmenubar.findOne({ email });
        if (existingEntry) {
            return res.status(400).json({ message: "An entry with this email already exists." });
        }
        const newEntry = new topmenubar({ email, contact });
        await newEntry.save();
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }           
};

export const getTopMenuBar = async (req, res) => {
    try {
        const entries = await topmenubar.find();
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};  