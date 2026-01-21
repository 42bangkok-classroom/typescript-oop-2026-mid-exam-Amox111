import fs from 'fs';    
const filePath: string = 'user.json';



export function readJson(fileName: string): unknown[] {
    fs.readFile(filePath, 'utf8', (err, jsonString: string) => {
        if (err) {
          console.error('Invalid file', err);
          return;
        }
      });

      return [];
}