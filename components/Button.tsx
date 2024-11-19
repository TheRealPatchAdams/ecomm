export default function Button({ text }: { text: string }) {
    return (
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
        {text}
      </button>
    );
  }
  