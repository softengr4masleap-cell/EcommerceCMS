import hero from '../../model/Hero/heroModel.js';


export const createHero = async (req, res) => {
    const { image, height, width, shadow, rounded, objectCover } = req.body;
    try {
        const newHero = new hero({ image, height, width, shadow, rounded, objectCover });
        await newHero.save();
        res.status(201).json(newHero);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }       
};

export const getAllHeroes = async (req, res) => {
    try {
        const heroes = await hero.find();
        res.status(200).json(heroes);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
export const getHeroById = async (req, res) => {
    const { id } = req.params;
    try {
        const heroItem = await hero.findById(id);       
        if (!heroItem) {
            return res.status(404).json({ message: "Hero not found" });
        }   
        res.status(200).json(heroItem);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }           
};

export const updateHero = async (req, res) => {     
    const { id } = req.params;
    const { image, height, width, shadow, rounded, objectCover } = req.body;
    try {
        const updatedHero = await hero.findByIdAndUpdate(   
            id,
            { image, height, width, shadow, rounded, objectCover },
            { new: true }
        );  
        if (!updatedHero) {
            return res.status(404).json({ message: "Hero not found" });
        }   
        res.status(200).json(updatedHero);
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }       
};
export const deleteHero = async (req, res) => {
    const { id } = req.params;      
    try {       
        const deletedHero = await hero.findByIdAndDelete(id);   
        if (!deletedHero) {     
            return res.status(404).json({ message: "Hero not found" });     
        }
        res.status(200).json({ message: "Hero deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }   
};
