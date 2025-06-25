import React from 'react';

const IndexPage: React.FC = () => {
  return (
    <div className="bg-background text-foreground font-mono min-h-screen p-8 sm:p-12 lg:p-16">
      <div className="space-y-6 text-base leading-relaxed">
        {/* Entry 1 */}
        <div>
          <p className="text-muted-foreground mb-2">23:20:42</p>
          <div className="space-y-1">
            <p className="text-primary">Agent : Code Agent | Understanding the project requirements.</p>
            <div className="flex items-start">
              <span className="text-primary mr-4 w-4">•</span>
              <p>
                <span className="text-secondary">Action: </span>
                <span className="text-foreground">Understanding the project requirements.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Entry 2 */}
        <div>
          <p className="text-muted-foreground mb-2">23:21:28</p>
          <div className="space-y-1">
            <p className="text-primary">Agent : Code Agent | Understanding the project requirements.</p>
            <div className="flex items-start">
              <span className="text-primary mr-4 w-4">•</span>
              <div className="space-y-1">
                <p>
                  <span className="text-secondary">Action: </span>
                  <span className="text-foreground">Understanding the project requirements.</span>
                </p>
                <p className="text-primary">Agent : Code Agent | react | tailwindcss</p>
                <p>
                  <span className="text-secondary">Action: </span>
                  <span className="text-foreground">Identifying the files to generate</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Entry 3 */}
        <div>
          <p className="text-muted-foreground mb-2">23:21:34</p>
          <div className="space-y-1">
            <p className="text-primary">Agent : Code Agent | Understanding the project requirements.</p>
            <div className="flex items-start">
              <span className="text-primary mr-4 w-4">•</span>
              <div className="space-y-1">
                <p>
                  <span className="text-secondary">Action: </span>
                  <span className="text-foreground">Understanding the project requirements.</span>
                </p>
                <p className="text-primary">Agent : Code Agent | react | tailwindcss</p>
                <p>
                  <span className="text-secondary">Action: </span>
                  <span className="text-foreground">Identifying the files to generate</span>
                </p>
                <p>
                  <span className="text-secondary">Action: </span>
                  <span className="text-foreground">Imagining an amazing design system for you</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Entry 4 */}
        <div>
          <p className="text-muted-foreground mb-2">23:24:16</p>
          <div className="space-y-1">
            <p className="text-primary">Agent : Code Agent | Understanding the project requirements.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;