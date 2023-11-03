'use client';

import { SingleImageDropzone } from '@/app/components/shared/SingleImageDropzone';
import { useEdgeStore } from '@/lib/edgestore';
import { useState } from 'react';
import { Progress } from '@/components/ui/progress';

export default function SingleImageDropzoneUsage() {
  const [file, setFile] = useState<File>();
  const { edgestore } = useEdgeStore();
  const [progress, setProgress] = useState(0);

  return (
    <div className="flex w-[150px] flex-col  items-center">
      <SingleImageDropzone
        width={150}
        height={150}
        value={file}
        onChange={(file) => {
          setProgress(0);
          setFile(file);
        }}
      />
      <Progress value={progress} />
      <button
        onClick={async () => {
          if (file) {
            const res = await edgestore.publicFiles.upload({
              file,
              onProgressChange: (progress) => {
                // you can use this to show a progress bar
                console.log('progress', progress);
                setProgress(progress);
              },
            });
            // you can run some server action or api here
            // to add the necessary data to your database
            console.log('res', res);
          }
        }}
        className="mt-2 rounded-md border bg-primary-500 px-5 py-1 text-primary-100"
      >
        Upload
      </button>
    </div>
  );
}
