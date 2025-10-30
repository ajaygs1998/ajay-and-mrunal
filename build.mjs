import esbuild from 'esbuild';
import { promises as fs } from 'fs';
import path from 'path';
// Fix: Import `process` to provide correct types and resolve the error.
import process from 'process';

const outdir = 'dist';

async function build() {
  try {
    // Ensure the output directory exists
    await fs.mkdir(outdir, { recursive: true });

    // Build the TypeScript/React code
    await esbuild.build({
      entryPoints: ['index.tsx'],
      bundle: true,
      minify: true,
      sourcemap: true,
      target: ['es2020'],
      outfile: path.join(outdir, 'bundle.js'),
      // Define process.env.API_KEY to avoid errors. Netlify will inject the actual value.
      define: {
        'process.env.API_KEY': '""',
      },
    });

    // Process and copy index.html for production
    let htmlContent = await fs.readFile('index.html', 'utf-8');
    
    // Remove the development-only importmap
    htmlContent = htmlContent.replace(/<script type="importmap">[\s\S]*?<\/script>/, '');

    // Replace the module script with the bundled script
    // Fix: Corrected typo from `htmlcontent` to `htmlContent`.
    htmlContent = htmlContent.replace(
      '<script type="module" src="/index.tsx"></script>',
      '<script src="/bundle.js" defer></script>'
    );

    await fs.writeFile(path.join(outdir, 'index.html'), htmlContent);

    console.log(`Build successful! Output in ./${outdir}`);

  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

build();
