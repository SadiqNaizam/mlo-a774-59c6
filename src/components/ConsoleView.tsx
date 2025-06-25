import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

const traceData = [
  { func: 'subscribe', path: 'subscription-management.util.ts:104' },
  { func: 'checkCodeGenerationStatus', path: 'polling.service.ts:177' },
  { func: '(anonymous)', path: 'polling.service.ts:605' },
  { func: 'Zone — setTimeout', isGroup: true },
  { func: 'scheduleNextPoll', path: 'polling.service.ts:602' },
  { func: 'processNewPollingResponse', path: 'polling.service.ts:1631' },
  { func: '(anonymous)', path: 'polling.service.ts:237' },
  { func: 'Zone — XMLHttpRequest.addEventListener:load', isGroup: true },
  { func: 'subscribe', path: 'subscription-management.util.ts:110' },
  { func: 'checkCodeGenerationStatus', path: 'polling.service.ts:177' },
  { func: 'startPolling', path: 'polling.service.ts:163' },
  { func: '(anonymous)', path: 'code-window.component.ts:2412' },
  { func: 'updateProjectState', path: 'app-state.service.ts:91' },
  { func: 'setCompleteSelections', path: 'app-state.service.ts:136' },
  { func: 'handleCodeGenerationResponse', path: 'prompt-content.component.ts:969' },
  { func: 'next', path: 'prompt-content.component.ts:889' },
  { func: 'Zone — XMLHttpRequest.addEventListener:load', isGroup: true },
  { func: 'generateCodeWithProject', path: 'prompt-content.component.ts:888' },
  { func: 'handleProjectResponse', path: 'prompt-content.component.ts:796' },
  { func: 'next', path: 'prompt-content.component.ts:783' },
  { func: 'Zone — XMLHttpRequest.addEventListener:load', isGroup: true },
  { func: 'handleSubmit', path: 'prompt-content.component.ts:782' },
  { func: 'handleEnhancedSend', path: 'prompt-content.component.ts:232' },
  { func: 'handleEnterPressed', path: 'prompt-content.component.ts:176' },
  { func: 'PromptContentComponent_Template_awe_prompt_bar_enterPressed_7_listener', path: 'prompt-content.component.html:15' },
  { func: 'Zone — Promise.then', isGroup: true },
  { func: '(anonymous)', path: '3865.js:1' },
];

const ConsoleView: React.FC = () => {
  return (
    <div className="text-sm">
      <div className="flex items-center gap-2">
        <AlertTriangle className="h-4 w-4 text-warning flex-shrink-0" />
        <p>Attempting to subscribe after ServiceSubscriptionManager has been destroyed</p>
      </div>
      
      <div className="mt-1 border-y border-border py-1">
        <div className="space-y-0.5">
          {traceData.map((item, index) => (
            <div 
              key={index} 
              className={cn(
                "flex justify-between items-center gap-4",
                item.isGroup ? "pt-1" : ""
              )}
            >
              <p className="whitespace-nowrap">{item.func}</p>
              {item.path && (
                <a href="#" className="text-primary underline hover:no-underline whitespace-nowrap">
                  @ {item.path}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-1">
        <a href="#" className="text-primary underline hover:no-underline">
          Show ignore-listed frames
        </a>
      </div>
    </div>
  );
};

export default ConsoleView;