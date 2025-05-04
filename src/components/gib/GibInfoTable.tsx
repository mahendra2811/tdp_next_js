import React from 'react';

interface TableRow {
  category: string;
  information: string;
}

interface GibInfoTableProps {
  data: TableRow[];
  title: string;
  moreInfoLink: string;
}

export default function GibInfoTable({ data, title, moreInfoLink }: GibInfoTableProps) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className={index % 2 === 1 ? 'bg-gray-100' : ''}>
                  <th className="border border-gray-300 p-3 text-left font-semibold">
                    {row.category}
                  </th>
                  <td className="border border-gray-300 p-3">{row.information}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <a
            href={moreInfoLink}
            className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            View more about GIB
          </a>
        </div>
      </div>
    </section>
  );
}
