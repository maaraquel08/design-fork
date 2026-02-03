interface ContactCardProps {
  avatar: string;
  name: string;
  profession: string;
}

export default function ContactCard({ avatar, name, profession }: ContactCardProps) {
  return (
    <div className="flex items-center gap-4 p-4 border border-border rounded-lg bg-card hover:bg-accent/50 transition-colors">
      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-lg font-semibold">
        {avatar}
      </div>
      <div className="flex flex-col">
        <h3 className="font-semibold text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground">{profession}</p>
      </div>
    </div>
  );
}
