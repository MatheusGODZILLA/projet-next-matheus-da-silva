export default function handler(req, res) {
    const contactInfo = {
      github: 'https://github.com/MatheusGODZILLA',
    };
  
    res.status(200).json(contactInfo);
  }
