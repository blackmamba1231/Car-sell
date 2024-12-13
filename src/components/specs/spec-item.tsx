"use client";


function IconWrapper({ Icon }: { Icon: any }) {
  return (
    <div className="p-2 rounded-full bg-gradient-to-br from-orange-200 via-red-300 to-red-500">
      <Icon className="w-6 h-6 text-white" />
    </div>
  );
}

// Usage Example in SpecItem
export const SpecItem = ({ icon: Icon, label, value }: any) => (
  <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-white via-orange-100 to-red-200 rounded-lg shadow-md">
    <IconWrapper Icon={Icon} />
    <div>
      <h4 className="text-sm font-bold text-red-900">{label}</h4>
      <p className="text-sm text-red-700">{value}</p>
    </div>
  </div>
);