import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServiceCard = ({
  icon,
  title,
  content,
}: {
  icon: React.ReactElement;
  title: string;
  content: string;
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle >{icon}</CardTitle>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-white/70">{content}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
