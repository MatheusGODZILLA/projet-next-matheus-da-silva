export default function handler(req, res) {
    const metadata = {
      home: {
        title: 'Godzilla – A Guerra do Meio Século',
        description: 'Página inicial do projeto sobre a HQ Godzilla – A Guerra de Meio Século.'
      },
      sobre: {
        title: 'Sobre a HQ',
        description: 'Informações detalhadas sobre a publicação original da HQ Godzilla – A Guerra de Meio Século.'
      },
      conrad: {
        title: 'Sobre a Conrad Editora',
        description: 'Informações sobre a Conrad Editora, responsável pela publicação da HQ no Brasil.'
      }
    };
  
    const { page } = req.query;
  
    if (metadata[page]) {
      res.status(200).json(metadata[page]);
    } else {
      res.status(404).json({ message: 'Página não encontrada' });
    }
  }