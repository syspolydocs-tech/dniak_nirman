import { useState } from "react";
import { useNavigate } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { mockContests } from "../data/mockData";
import { Calendar, Trophy, Users, FileText } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner@2.0.3";
import { useAuth } from "../contexts/AuthContext";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function Contests() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [selectedTab, setSelectedTab] = useState<"open" | "upcoming" | "closed">("open");

  const filteredContests = mockContests.filter(contest => contest.status === selectedTab);

  const handleJoinContest = (contestId: string) => {
    if (!isAuthenticated) {
      toast.error("Please login to join contests", {
        action: {
          label: "Login",
          onClick: () => navigate("/login"),
        },
      });
      return;
    }
    toast.success("You've joined the contest! Check your email for details.");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Writing Contests</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Showcase your talent, compete with other writers, and win exciting prizes
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">$15,000+</p>
                <p className="text-sm text-muted-foreground">Total Prize Money</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">1,000+</p>
                <p className="text-sm text-muted-foreground">Active Participants</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">4</p>
                <p className="text-sm text-muted-foreground">Active Contests</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contests Tabs */}
      <Tabs value={selectedTab} onValueChange={(value) => setSelectedTab(value as any)} className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
          <TabsTrigger value="open">Open</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="closed">Closed</TabsTrigger>
        </TabsList>

        <TabsContent value={selectedTab}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredContests.map((contest, index) => (
              <motion.div
                key={contest.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="relative h-48">
                    <ImageWithFallback
                      src={contest.image}
                      alt={contest.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant={contest.status === "open" ? "default" : "secondary"}
                        className="capitalize"
                      >
                        {contest.status}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{contest.title}</CardTitle>
                        <Badge variant="outline" className="mb-2">
                          {contest.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4">{contest.description}</p>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Trophy className="w-4 h-4 text-primary" />
                        <span className="font-semibold">{contest.prize}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>Deadline: {contest.deadline}</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-primary" />
                        <span>{contest.participants} participants</span>
                      </div>

                      {contest.entryFee && (
                        <div className="flex items-center gap-2 text-sm">
                          <span className="font-semibold">Entry Fee: ${contest.entryFee}</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-auto pt-4 border-t">
                      <h4 className="font-semibold text-sm mb-2">Contest Rules:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {contest.rules.slice(0, 3).map((rule, i) => (
                          <li key={i}>• {rule}</li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      className="w-full mt-4"
                      onClick={() => handleJoinContest(contest.id)}
                      disabled={contest.status !== "open"}
                    >
                      {contest.status === "open" ? "Join Contest" : "Not Available"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredContests.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No {selectedTab} contests at the moment. Check back soon!
              </p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
