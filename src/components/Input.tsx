export default function Input({
  state,
  setState,
  type,
  placeholder,
}: {
  state: any;
  setState: (value: any) => void;
  type: string;
  placeholder: string;
}) {
  return (
    <input
      className="flex rounded-md text-primary px-4 py-2"
      type={type}
      value={state}
      onChange={(e) => setState(e.target.value)}
      placeholder={placeholder}
    />
  );
}
