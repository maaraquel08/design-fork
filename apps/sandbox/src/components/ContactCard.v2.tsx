interface ContactCardProps {
  avatar: string;
  name: string;
  profession: string;
}

export default function ContactCard({ avatar, name, profession }: ContactCardProps) {
  return (
    <div className="flex flex-col items-center gap-3 p-6 border border-border rounded-lg bg-card hover:bg-accent/50 transition-colors text-center">
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center text-2xl font-semibold">
        {avatar}
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground">{profession}</p>
      </div>
    </div>
  );
}
