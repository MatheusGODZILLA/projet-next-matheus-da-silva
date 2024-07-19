export default function handler(req, res) {
    const config = {
      name: 'Godzilla – A Guerra do Meio Século',
      version: '1.0.0',
      developer: 'Matheus da Silva'
    };
  
    res.status(200).json(config);
}  