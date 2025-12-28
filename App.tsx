import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Download, 
  ExternalLink, 
  Mail, 
  MapPin, 
  Send,
  Terminal,
  Phone,
  Key,
  User,
  RefreshCw,
  Copy,
  Eye,
  EyeOff,
  Settings2,
  Trash2,
  Lock,
  Zap,
  Check,
  ChevronRight,
  Shield 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { Header, Footer, PageShell, ThemeProvider } from './components/Layout';
import { Button, Card, Badge, Input, Textarea, cn } from './components/UI';
import { 
  SERVICES, 
  PROJECTS, 
  EXPERIENCE, 
  SKILLS, 
  CERTIFICATIONS, 
  TOOL_LOGOS 
} from './constants';
import { Project } from './types';

// --- Framer Motion Variants ---
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// --- Components ---
const Scanline = () => (
  <>
    <div className="scanline-bar"></div>
    <div className="fixed inset-0 pointer-events-none z-0 bg-grid opacity-30"></div>
  </>
);

// Helper component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Generators Logic Data - Massive Vocabulary Expansion ---
const WORDS = [
  'alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot', 'golf', 'hotel', 'india', 'juliet', 'kilo', 'lima', 'mike', 'november', 'oscar', 'papa', 'quebec', 'romeo', 'sierra', 'tango', 'uniform', 'victor', 'whiskey', 'xray', 'yankee', 'zulu',
  'nebula', 'cipher', 'proxy', 'node', 'stack', 'cloud', 'data', 'byte', 'logic', 'core', 'system', 'root', 'shell', 'admin', 'sync', 'flow', 'grid', 'base', 'bit', 'code', 'link', 'port', 'user', 'host', 'firewall', 'packet', 'kernel', 'daemon', 'binary',
  'vertex', 'matrix', 'stream', 'buffer', 'socket', 'thread', 'cache', 'vault', 'crypto', 'sector', 'token', 'access', 'tunnel', 'bridge', 'uptime', 'packet', 'router', 'uplink', 'downlink', 'frame', 'subnet', 'static', 'dynamic', 'remote', 'local',
  'kernel', 'daemon', 'latency', 'payload', 'buffer', 'socket', 'thread', 'mutex', 'semaphore', 'shard', 'index', 'query', 'script', 'shell', 'macro', 'module', 'plugin', 'patch', 'update', 'build', 'commit', 'branch', 'merge', 'push', 'pull', 'clone', 'fork', 'diff', 'vault', 'stash', 'cache', 'store', 'disk', 'drive', 'array', 'strip', 'block', 'sector', 'track', 'head', 'seek', 'write', 'read', 'open', 'close', 'save', 'load', 'exec', 'kill', 'exit', 'wait', 'pipe', 'stream', 'flow', 'link', 'port', 'addr', 'host', 'peer', 'node', 'hub', 'bridge', 'route', 'path', 'gate', 'mask', 'net', 'vlan', 'dns', 'ip', 'dhcp', 'icmp', 'tcp', 'udp', 'ssh', 'http', 'tls', 'ssl', 'cert', 'key', 'iv', 'salt', 'hash', 'sign', 'crypt', 'auth', 'login', 'user', 'root', 'sudo', 'wheel', 'staff', 'guest', 'admin', 'sys', 'ops', 'dev', 'sec', 'it', 'db', 'sql', 'json', 'yaml', 'xml', 'html', 'css', 'js', 'ts', 'py', 'rb', 'go', 'rust', 'c', 'cpp', 'java', 'php', 'perl', 'bash', 'zsh', 'fish', 'ksh', 'sh', 'awk', 'sed', 'vim', 'nano', 'tmux', 'git', 'svn', 'make', 'npm', 'yarn', 'pip', 'gem', 'cargo', 'apt', 'yum', 'dnf', 'brew', 'docker', 'helm', 'pod', 'node', 'svc', 'dep', 'job', 'cron', 'ing', 'pv', 'pvc', 'sc', 'cm', 'sec', 'sa', 'role', 'rb', 'cpu', 'mem', 'gpu', 'ram', 'ssd', 'hdd', 'nvme', 'sas', 'sata', 'usb', 'pci', 'bios', 'uefi', 'grub', 'mbr', 'gpt', 'boot', 'init', 'ping', 'dig', 'mtr', 'curl', 'wget',
  'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto', 'orion', 'cygnus', 'lyra', 'draco', 'pegasus', 'andromeda', 'cassiopeia', 'cepheus', 'perseus', 'auriga', 'bootes', 'aquila', 'scorpius', 'sagittarius', 'capricorn', 'aquarius', 'pisces', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'titan', 'europa', 'ganymede', 'callisto', 'io', 'enceladus', 'triton', 'phobos', 'deimos', 'charon', 'ceres', 'eris', 'makemake', 'haumea', 'quasar', 'pulsar', 'comet', 'meteor', 'asteroid', 'galaxy', 'cluster', 'void', 'supernova', 'blackhole', 'eventhorizon', 'singularity', 'wormhole', 'spacetime', 'gravity', 'photon', 'electron', 'neutron', 'proton', 'quark', 'lepton', 'boson', 'gluon', 'higgs', 'neutrino', 'plasma', 'vacuum', 'entropy', 'energy', 'force', 'mass', 'velocity', 'acceleration', 'momentum', 'inertia', 'friction', 'pressure', 'volume', 'density', 'temperature', 'radiation', 'magnetic', 'electric', 'static', 'dynamic', 'kinetic', 'potential', 'atomic', 'molecular', 'chemical', 'biological', 'physical', 'mathematical', 'logical', 'digital', 'analog', 'virtual', 'cyber', 'quantum', 'meta', 'hyper', 'super', 'ultra', 'mega', 'giga', 'tera', 'peta', 'exa', 'zetta', 'yotta'
];

const ADJECTIVES = [
  'fast', 'secure', 'smart', 'global', 'active', 'prime', 'main', 'open', 'dark', 'neon', 'cyber', 'quantum', 'digital', 'cloudy', 'stealth', 'rapid', 'atomic', 'mighty', 'silent', 'bold', 'stable', 'fluent', 'hyper', 'sonic', 'meta', 'ultra', 'crypto', 'virtual', 'latent', 'elastic',
  'agile', 'nimble', 'shadow', 'stellar', 'epic', 'vibrant', 'frozen', 'blazing', 'cosmic', 'shrewd', 'hidden', 'master', 'grand', 'solar', 'lunar', 'plasma', 'glitch', 'static', 'vector', 'omega', 'infinity', 'legend', 'mythic', 'arcane', 'astral', 'obsidian', 'iron',
  'spectral', 'void', 'infinite', 'celestial', 'rhythmic', 'synced', 'cached', 'paged', 'shared', 'locked', 'private', 'public', 'hybrid', 'native', 'distributed', 'reactive', 'modular', 'stateless', 'stateful', 'persistent', 'volatile', 'buffered', 'pipelined', 'concurrent', 'parallel',
  'async', 'serial', 'terminal', 'console', 'modern', 'future', 'retro', 'classic', 'standard', 'shrouded', 'ember', 'obsidian', 'velocity', 'titan', 'apex', 'vortex', 'rift', 'flux', 'echo', 'zenith', 'nexus', 'orbital', 'matrix', 'spark',
  'bright', 'dim', 'vivid', 'pale', 'sharp', 'dull', 'rough', 'smooth', 'hard', 'soft', 'tough', 'weak', 'strong', 'mighty', 'heavy', 'light', 'thick', 'thin', 'wide', 'narrow', 'deep', 'shallow', 'hot', 'cold', 'warm', 'cool', 'wet', 'dry', 'fresh', 'stale', 'new', 'old', 'young', 'ancient', 'rapid', 'slow', 'steady', 'shaky', 'stable', 'unstable', 'active', 'passive', 'direct', 'indirect', 'simple', 'complex', 'easy', 'hard', 'clear', 'vague', 'loud', 'quiet', 'noisy', 'silent', 'bold', 'shy', 'brave', 'fearful', 'happy', 'sad', 'angry', 'calm', 'sweet', 'sour', 'bitter', 'salty', 'rich', 'poor', 'cheap', 'dear', 'first', 'last', 'early', 'late', 'inner', 'outer', 'upper', 'lower', 'high', 'low', 'top', 'bottom', 'left', 'right', 'front', 'back', 'central', 'remote', 'local', 'global', 'public', 'private', 'unique', 'common', 'rare', 'plentiful', 'empty', 'full', 'blank', 'filled', 'clean', 'dirty', 'pure', 'mixed', 'solid', 'liquid', 'gas', 'plasma', 'digital', 'analog', 'virtual', 'real', 'true', 'false', 'right', 'wrong', 'correct', 'incorrect', 'legal', 'illegal', 'valid', 'invalid', 'secure', 'unsecure', 'stable', 'unstable', 'fixed', 'fluid', 'rigid', 'flexible'
];

const NOUNS = [
  'fox', 'wolf', 'eagle', 'hawk', 'lion', 'tiger', 'bear', 'shark', 'falcon', 'raven', 'cobra', 'panther', 'ghost', 'shadow', 'blade', 'spark', 'vector', 'matrix', 'orbital', 'zenith', 'nexus', 'pulse', 'pixel', 'vortex', 'rift', 'echo', 'flux', 'apex', 'titan', 'atlas',
  'dragon', 'phoenix', 'viper', 'golem', 'kraken', 'cyborg', 'droid', 'bot', 'scout', 'raider', 'sentry', 'guardian', 'ranger', 'knight', 'monk', 'wizard', 'rogue', 'ninja', 'samurai', 'comet', 'meteor', 'nova', 'pulsar', 'quasar', 'galaxy', 'planet', 'moon', 'star', 'void',
  'engine', 'service', 'worker', 'job', 'task', 'event', 'signal', 'message', 'queue', 'pipe', 'channel', 'stream', 'flow', 'wave', 'beam', 'ray', 'particle', 'atom', 'molecule', 'cell', 'unit', 'object', 'entity', 'record', 'field', 'key', 'value', 'pair', 'map', 'set', 'list', 'array', 'tree', 'graph', 'mesh', 'fabric', 'weave', 'pattern', 'design', 'logic', 'rule', 'policy', 'role', 'group', 'tenant', 'org', 'site', 'app', 'tool', 'util',
  'server', 'client', 'host', 'node', 'peer', 'link', 'port', 'router', 'switch', 'hub', 'bridge', 'gate', 'wall', 'lock', 'key', 'token', 'vault', 'store', 'cache', 'disk', 'drive', 'tape', 'ram', 'cpu', 'gpu', 'chip', 'board', 'case', 'rack', 'room', 'site', 'zone', 'area', 'region', 'state', 'mode', 'status', 'level', 'rank', 'type', 'kind', 'form', 'shape', 'size', 'part', 'piece', 'unit', 'base', 'core', 'apex', 'peak', 'top', 'edge', 'side', 'face', 'back', 'front', 'root', 'leaf', 'branch', 'stem', 'seed', 'fruit', 'flower', 'tree', 'bush', 'plant', 'rock', 'stone', 'gem', 'gold', 'silver', 'iron', 'steel', 'wood', 'fire', 'ice', 'wind', 'rain', 'snow', 'storm', 'cloud', 'mist', 'fog', 'sky', 'sea', 'ocean', 'river', 'lake', 'pool', 'stream', 'hill', 'mount', 'peak', 'vale', 'cave', 'rift', 'abyss', 'void', 'space', 'star', 'sun', 'moon', 'world', 'land', 'earth', 'ground', 'floor', 'wall', 'door', 'roof', 'window', 'desk', 'chair', 'table', 'book', 'pen', 'tool', 'gear', 'bolt', 'screw', 'nail', 'pin', 'key', 'lock', 'bell', 'drum', 'horn', 'pipe', 'lamp', 'torch', 'fire', 'flame', 'spark', 'ash', 'dust', 'sand', 'dirt', 'mud', 'clay', 'salt', 'sugar', 'oil', 'fuel', 'power', 'force', 'energy', 'light', 'heat', 'cold', 'sound', 'noise', 'voice', 'word', 'name', 'sign', 'mark', 'code', 'text', 'link', 'map', 'path', 'way', 'road', 'track', 'line', 'loop', 'ring', 'belt', 'band', 'cord', 'wire', 'cable'
];

// --- Tool Components ---

const PasswordGenerator = () => {
  const [mode, setMode] = useState<'random' | 'pin' | 'memorable'>('random');
  const [length, setLength] = useState(16);
  const [count, setCount] = useState(1);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeDigits, setIncludeDigits] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [symbolSet, setSymbolSet] = useState<'basic' | 'extended'>('basic');
  const [excludeAmbiguous, setExcludeAmbiguous] = useState(true);
  const [autoRegen, setAutoRegen] = useState(true);
  const [showPassword, setShowPassword] = useState(true); 
  const [results, setResults] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Mode-based constraints
  const minL = mode === 'pin' ? 6 : 8;
  const maxL = mode === 'pin' ? 16 : 36;

  // Sync length with constraints on mode change
  useEffect(() => {
    setLength(prev => {
      if (prev < minL) return minL;
      if (prev > maxL) return maxL;
      return prev;
    });
  }, [mode, minL, maxL]);

  const generate = useCallback(() => {
    const newResults: string[] = [];
    const charsetLower = 'abcdefghijklmnopqrstuvwxyz';
    const charsetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charsetDigits = '0123456789';
    const symbolsBasic = '!@#$%^&*()';
    const symbolsExtended = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const ambiguousChars = 'Il1O0';

    for (let i = 0; i < count; i++) {
      let pwd = '';
      if (mode === 'random') {
        let chars = charsetLower; // Included by default
        if (includeUpper) chars += charsetUpper;
        if (includeDigits) chars += charsetDigits;
        if (includeSymbols) chars += symbolSet === 'basic' ? symbolsBasic : symbolsExtended;
        
        if (excludeAmbiguous) {
          chars = chars.split('').filter(c => !ambiguousChars.includes(c)).join('');
        }

        for (let j = 0; j < length; j++) {
          pwd += chars.charAt(Math.floor(Math.random() * chars.length));
        }
      } else if (mode === 'pin') {
        for (let j = 0; j < length; j++) {
          pwd += charsetDigits.charAt(Math.floor(Math.random() * charsetDigits.length));
        }
      } else if (mode === 'memorable') {
        let adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
        let noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
        
        if (includeUpper) {
          adj = adj.charAt(0).toUpperCase() + adj.slice(1);
          noun = noun.charAt(0).toUpperCase() + noun.slice(1);
        }

        let thirdPart = '';
        let thirdPartChars = '';
        if (includeDigits) thirdPartChars += charsetDigits;
        if (includeSymbols) thirdPartChars += symbolSet === 'basic' ? symbolsBasic : symbolsExtended;
        
        if (thirdPartChars.length > 0) {
          // Generate 4 chars for the third part
          for (let j = 0; j < 4; j++) {
            thirdPart += thirdPartChars.charAt(Math.floor(Math.random() * thirdPartChars.length));
          }
        } else {
          // Fallback to numeric if nothing selected
          thirdPart = Math.floor(Math.random() * 9999).toString().padStart(4, '0');
        }
        
        pwd = `${adj}-${noun}-${thirdPart}`;
      }
      newResults.push(pwd);
    }
    setResults(newResults);
  }, [mode, length, count, includeUpper, includeDigits, includeSymbols, symbolSet, excludeAmbiguous]);

  useEffect(() => {
    if (autoRegen) generate();
  }, [generate, autoRegen]);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const getStrength = (pwd: string) => {
    if (mode === 'pin') {
      if (pwd.length < 8) return { label: 'Weak PIN', color: 'bg-red-500' };
      if (pwd.length < 12) return { label: 'Medium PIN', color: 'bg-yellow-500' };
      return { label: 'Strong PIN', color: 'bg-green-500' };
    }
    if (pwd.length < 12) return { label: 'Weak', color: 'bg-red-500' };
    if (pwd.length < 20) return { label: 'Medium', color: 'bg-yellow-500' };
    return { label: 'Strong', color: 'bg-green-500' };
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Column 1-2, Row 1: Generation Mode */}
      <Card className="md:col-span-2 p-6">
        <h4 className="text-base font-bold uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
          <Zap size={16} /> Generation Mode
        </h4>
        <div className="grid grid-cols-3 gap-3">
          {(['random', 'pin', 'memorable'] as const).map(m => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={cn(
                "px-4 py-3 rounded-lg text-sm sm:text-base font-semibold border transition-all text-center capitalize",
                mode === m 
                  ? "bg-cyan-500/10 border-cyan-500 text-cyan-600 dark:text-cyan-400" 
                  : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
              )}
            >
              {m}
            </button>
          ))}
        </div>
      </Card>

      {/* Column 3, Rows 1-2: Charsets (Spans vertical) */}
      <Card className="md:row-span-2 p-6 flex flex-col justify-center">
        <h4 className="text-base font-bold uppercase tracking-widest text-slate-500 mb-8">Charsets</h4>
        <div className="space-y-6">
          <label className="flex items-center justify-between cursor-pointer group">
            <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Upper (A-Z)</span>
            <input type="checkbox" checked={includeUpper} onChange={(e) => setIncludeUpper(e.target.checked)} className="w-5 h-5 rounded text-cyan-500" />
          </label>
          <label className="flex items-center justify-between cursor-pointer group">
            <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Digits (0-9)</span>
            <input type="checkbox" checked={includeDigits} onChange={(e) => setIncludeDigits(e.target.checked)} className="w-5 h-5 rounded text-cyan-500" />
          </label>
          <label className="flex items-center justify-between cursor-pointer group">
            <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Symbols</span>
            <input type="checkbox" checked={includeSymbols} onChange={(e) => setIncludeSymbols(e.target.checked)} className="w-5 h-5 rounded text-cyan-500" />
          </label>
          {includeSymbols && (
            <div className="pt-2">
              <select 
                value={symbolSet} onChange={(e) => setSymbolSet(e.target.value as any)}
                className="w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded px-3 py-2 text-sm"
              >
                <option value="basic">Basic (!@#$%^&*())</option>
                <option value="extended">Extended (Full set)</option>
              </select>
            </div>
          )}
        </div>
      </Card>

      {/* Column 1-2, Row 2: Basic Config */}
      <Card className="md:col-span-2 p-6">
        <h4 className="text-base font-bold uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
          <Settings2 size={16} /> Basic Config
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Length: Disabled for Memorable */}
          <div className={cn("space-y-3 transition-opacity", mode === 'memorable' && "opacity-50 pointer-events-none")}>
            <div className="flex justify-between text-xs sm:text-sm font-mono">
              <span className="text-slate-500 uppercase font-bold tracking-tight">Length</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-bold">{mode === 'memorable' ? 'Fixed' : `${length} ${mode === 'pin' ? 'digits' : 'chars'}`}</span>
            </div>
            <input 
              type="range" min={minL} max={maxL} value={length} 
              disabled={mode === 'memorable'}
              onChange={(e) => setLength(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
          </div>
          {/* Batch Count: Enabled for all */}
          <div className="space-y-3">
            <div className="flex justify-between text-xs sm:text-sm font-mono">
              <span className="text-slate-500 uppercase font-bold tracking-tight">Batch Count</span>
              <span className="text-cyan-600 dark:text-cyan-400 font-bold">{count}</span>
            </div>
            <input 
              type="range" min="1" max="5" value={count} 
              onChange={(e) => setCount(parseInt(e.target.value))}
              className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
          </div>
        </div>
      </Card>

      {/* Row 3: Password results and generate button (1-3) */}
      <Card className="md:col-span-3 p-4 sm:p-10 bg-slate-50/50 dark:bg-slate-900/30 border-dashed relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
          <Lock size={120} />
        </div>
        <div className="flex flex-col gap-10 relative z-10">
          <AnimatePresence mode="popLayout">
            {results.map((res, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative group flex flex-col"
              >
                <div className="relative flex items-center">
                  <div className={cn(
                    "w-full p-6 pr-40 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 font-mono text-lg sm:text-2xl leading-relaxed tracking-widest break-all transition-all shadow-md min-h-[80px] flex items-center",
                    !showPassword && "blur-md select-none"
                  )}>
                    {res}
                  </div>
                  {/* Result Icons - Perfectly Centered Vertically via top/translate */}
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-3 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <Button 
                      variant="ghost" 
                      className="h-10 w-10 p-0 rounded-full flex items-center justify-center bg-slate-100/50 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" 
                      onClick={() => setShowPassword(!showPassword)} 
                      title={showPassword ? "Hide" : "Show"}
                    >
                      {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-10 w-10 p-0 rounded-full flex items-center justify-center border-cyan-500/30 bg-slate-100/50 dark:bg-slate-800/50 hover:bg-cyan-500/10 transition-colors" 
                      onClick={() => copyToClipboard(res, idx)}
                    >
                      {copiedIndex === idx ? <Check size={22} /> : <Copy size={22} />}
                    </Button>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3 px-2">
                  <div className="flex-grow h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className={cn("h-full transition-all duration-500", getStrength(res).color)} style={{ width: `${Math.min((res.length / maxL) * 100, 100)}%` }} />
                  </div>
                  <span className="text-[11px] uppercase font-bold tracking-widest text-slate-500 whitespace-nowrap">{getStrength(res).label}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div className="mt-4">
            <Button className="w-full gap-3 py-5 text-lg font-bold shadow-lg" size="lg" onClick={generate}>
              <RefreshCw size={24} className={autoRegen ? "" : "animate-spin-once"} /> Generate Secure Passwords
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

const UsernameGenerator = () => {
  const [style, setStyle] = useState<'pattern' | 'professional' | 'random'>('pattern');
  const [prefix, setPrefix] = useState('');
  const [suffix, setSuffix] = useState('');
  const [batchSize, setBatchSize] = useState(5);
  const [allowDigits, setAllowDigits] = useState(true);
  const [separator, setSeparator] = useState<'_' | '.' | '-' | ''>('_');
  const [results, setResults] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const generate = useCallback(() => {
    const newResults: string[] = [];
    const used = new Set<string>();

    while (newResults.length < batchSize) {
      let username = '';
      if (style === 'pattern') {
        const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
        const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
        username = `${adj}${separator}${noun}`;
      } else if (style === 'professional') {
        const first = ['john', 'jane', 'alex', 'sam', 'chris', 'dev', 'sys', 'ops', 'admin', 'user', 'manager', 'lead', 'tech', 'architect', 'expert', 'pro'][Math.floor(Math.random() * 16)];
        const last = ['smith', 'doe', 'matrix', 'cloud', 'cyber', 'tech', 'node', 'logic', 'stack', 'vortex', 'core', 'base', 'system'][Math.floor(Math.random() * 13)];
        username = `${first}${separator}${last}`;
      } else {
        username = Math.random().toString(36).substring(2, 10);
      }

      if (allowDigits) {
        username += Math.floor(Math.random() * 999).toString();
      }

      const finalUname = `${prefix}${username}${suffix}`;
      if (!used.has(finalUname)) {
        newResults.push(finalUname);
        used.add(finalUname);
      }
    }
    setResults(newResults);
  }, [style, prefix, suffix, batchSize, allowDigits, separator]);

  useEffect(() => {
    generate();
  }, [generate]);

  return (
    <div className="flex flex-col gap-8">
      {/* Top Configuration Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h4 className="text-base font-bold uppercase tracking-widest text-slate-500 mb-6">Style & Rules</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-tight text-slate-400 block">Pattern Selector</span>
              <div className="grid grid-cols-1 gap-2">
                {(['pattern', 'professional', 'random'] as const).map(s => (
                  <button
                    key={s}
                    onClick={() => setStyle(s)}
                    className={cn(
                      "px-4 py-3 rounded-lg text-sm sm:text-base font-semibold border text-left flex items-center justify-between transition-colors",
                      style === s 
                        ? "bg-cyan-500/10 border-cyan-500 text-cyan-600 dark:text-cyan-400" 
                        : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700"
                    )}
                  >
                    <span className="capitalize">{s}</span>
                    {style === s && <Check size={16} />}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-tight text-slate-400 block">Separator</span>
              <div className="grid grid-cols-2 gap-2">
                {(['_', '.', '-', ''] as const).map(sep => (
                  <button
                    key={sep}
                    onClick={() => setSeparator(sep)}
                    className={cn(
                      "flex-grow h-10 rounded-lg border text-sm sm:text-base font-bold flex items-center justify-center transition-all",
                      separator === sep 
                        ? "bg-cyan-500 text-slate-950 border-cyan-500" 
                        : "bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-500 hover:border-slate-300 dark:hover:border-slate-700"
                    )}
                  >
                    {sep === '' ? 'None' : sep}
                  </button>
                ))}
              </div>
              <div className="pt-2">
                <label className="flex items-center justify-between cursor-pointer group">
                  <span className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">Digits</span>
                  <input type="checkbox" checked={allowDigits} onChange={(e) => setAllowDigits(e.target.checked)} className="w-5 h-5 rounded text-cyan-500" />
                </label>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h4 className="text-base font-bold uppercase tracking-widest text-slate-500 mb-6">Customization</h4>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs sm:text-sm uppercase font-bold text-slate-400 block tracking-tight">Fixed Prefix</label>
              <Input value={prefix} onChange={(e) => setPrefix(e.target.value)} placeholder="e.g. dev_" className="h-11 text-sm sm:text-base" />
            </div>
            <div className="space-y-2">
              <label className="text-xs sm:text-sm uppercase font-bold text-slate-400 block tracking-tight">Fixed Suffix</label>
              <Input value={suffix} onChange={(e) => setSuffix(e.target.value)} placeholder="e.g. _sys" className="h-11 text-sm sm:text-base" />
            </div>
            <div className="sm:col-span-2 space-y-4 pt-2">
              <div className="flex justify-between text-xs sm:text-sm font-mono font-bold uppercase tracking-tight">
                <span className="text-slate-400">Suggestions count</span>
                <span className="text-cyan-600 dark:text-cyan-400">{batchSize}</span>
              </div>
              <input 
                type="range" min="1" max="10" value={batchSize} 
                onChange={(e) => setBatchSize(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
              />
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom Result Area */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {results.map((uname, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card className="p-5 flex items-center justify-between group hover:bg-slate-50 dark:hover:bg-slate-900/50 shadow-sm transition-all border-dashed">
                <span className="font-mono text-base sm:text-xl font-bold text-slate-800 dark:text-slate-200 break-all min-w-0 flex-grow pr-4">{uname}</span>
                <Button 
                  variant="ghost" size="sm" className="gap-2 flex-shrink-0 h-10 w-10 p-0 rounded-full"
                  onClick={() => {
                    navigator.clipboard.writeText(uname);
                    setCopiedIndex(idx);
                    setTimeout(() => setCopiedIndex(null), 2000);
                  }}
                >
                  {copiedIndex === idx ? <Check size={20} /> : <Copy size={20} />}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
        <Button className="w-full gap-3 py-6 text-lg font-bold shadow-lg" size="lg" onClick={generate}>
          <RefreshCw size={24} /> Generate New Suggestions
        </Button>
      </div>
    </div>
  );
};

// --- Main Pages ---

const FreeToolsPage = () => {
  const [activeTab, setActiveTab] = useState<'password' | 'username'>('password');

  return (
    <PageShell className="container mx-auto max-w-6xl px-4">
      <motion.div 
        initial="initial" animate="animate" variants={staggerContainer}
        className="mb-12"
      >
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Free Technical Tools</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A collection of technical utilities built to assist in daily administration tasks. 
            All generation is done locally in your browser for maximum security.
          </p>
        </motion.div>

        <div className="flex justify-center mb-12">
          <div className="p-1 bg-slate-200/50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-800 flex gap-1">
            <button
              onClick={() => setActiveTab('password')}
              className={cn(
                "px-8 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2",
                activeTab === 'password'
                  ? "bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-100"
              )}
            >
              <Key size={18} /> Password Gen
            </button>
            <button
              onClick={() => setActiveTab('username')}
              className={cn(
                "px-8 py-2.5 rounded-lg text-sm font-bold transition-all flex items-center gap-2",
                activeTab === 'username'
                  ? "bg-white dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 shadow-sm"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-100"
              )}
            >
              <User size={18} /> Username Gen
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'password' ? <PasswordGenerator /> : <UsernameGenerator />}
          </motion.div>
        </AnimatePresence>

        <div className="mt-20">
          <Card variant="glass" className="p-8 border-cyan-500/20 bg-cyan-500/[0.02]">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="h-16 w-16 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-500">
                <Shield size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Security Notice</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  Data generated by these tools is processed exclusively on your device. We do not transmit, log, or store any of the generated passwords or usernames on our servers. For high-security environments, always follow your organization's internal password policy.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </PageShell>
  );
};

const HomePage = () => (
  <div className="flex flex-col gap-24 pb-20">
    <section className="relative pt-12 pb-20 md:pt-32 md:pb-32 px-4 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="container mx-auto max-w-4xl text-center flex flex-col items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs font-mono"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Available for new projects
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
        >
          System Admin <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-600">
            Microsoft Specialist
          </span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mb-10 font-mono"
        >
          Specializing in Hybrid Identity, Exchange, Azure Infrastructure, and Endpoint Automation.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link to="/services">
            <Button size="lg" className="w-full sm:w-auto gap-2">
              View Services <ArrowRight size={18} />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
    <section className="container mx-auto max-w-6xl px-4 md:px-12 relative z-10">
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-100 dark:opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {TOOL_LOGOS.map((tool) => (
          <div key={tool.name} className="flex flex-col items-center gap-2 group">
             <tool.icon size={32} className="text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
             <span className="text-xs font-mono font-bold text-slate-800 dark:text-slate-500 group-hover:text-cyan-700 dark:group-hover:text-cyan-400">{tool.name.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </section>
    <section className="container mx-auto max-w-6xl px-4 md:px-12 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Capabilities</h2>
          <p className="text-slate-600 dark:text-slate-400">Core competencies and technical focus areas.</p>
        </div>
        <Link to="/services" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 text-sm font-medium flex items-center gap-1">
          View all services <ArrowRight size={16} />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.slice(0, 3).map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="h-full p-6 flex flex-col gap-4">
              <div className="h-12 w-12 rounded-lg bg-cyan-100 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm flex-grow">{service.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
    <section className="container mx-auto max-w-6xl px-4 md:px-12 relative z-10">
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">Selected Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.slice(0, 2).map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full p-8 group cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900/80 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <span className="text-xs font-mono text-slate-500">{project.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block mb-1">Challenge:</strong>
                  {project.challenge}
                </div>
                <div>
                  <strong className="text-slate-800 dark:text-slate-200 block mb-1">Outcome:</strong>
                  {project.outcome}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link to="/projects">
          <Button variant="outline">View All Projects</Button>
        </Link>
      </div>
    </section>
    <section className="container mx-auto max-w-6xl px-4 md:px-12 mb-12 relative z-10">
      <Card variant="glass" className="p-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Ready to optimize your infrastructure?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Whether you need a one-off migration or ongoing support, I'm here to help you scale securely.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
            <a href="mailto:ilirprevazi@gmail.com">
              <Button variant="ghost" size="lg">ilirprevazi@gmail.com</Button>
            </a>
          </div>
        </div>
      </Card>
    </section>
  </div>
);

const ServicesPage = () => (
  <PageShell className="container mx-auto px-4">
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-4xl mx-auto">
      <motion.div variants={fadeInUp} className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Services</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400">
          Professional IT services designed to secure, manage, and optimize your Microsoft environment.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 gap-8">
        {SERVICES.map((service) => (
          <motion.div key={service.id} variants={fadeInUp}>
            <Card className="p-6 md:p-8 grid md:grid-cols-[1fr,2fr] gap-8">
              <div className="flex flex-col gap-4">
                <div className="h-14 w-14 rounded-lg bg-cyan-100 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{service.description}</p>
                <Link to="/contact">
                  <Button variant="outline" size="sm" className="mt-2 w-full md:w-auto">Inquire</Button>
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-8 text-sm">
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-cyan-500" /> What You Get
                  </h4>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-700 mt-1.5 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
                    <Terminal size={16} className="text-cyan-500" /> Deliverables
                  </h4>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </PageShell>
);

const ProjectsPage = () => {
  const [filter, setFilter] = useState('All');
  const allTags = ['All', ...Array.from(new Set(PROJECTS.flatMap(p => p.tags)))];
  const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.tags.includes(filter));
  return (
    <PageShell className="container mx-auto px-4">
      <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-5xl mx-auto">
        <motion.div variants={fadeInUp} className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Case Studies</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            Real-world examples of infrastructure challenges solved through modern cloud architecture.
          </p>
        </motion.div>
        <motion.div variants={fadeInUp} className="flex flex-wrap gap-2 mb-12">
          {allTags.map(tag => (
            <button key={tag} onClick={() => setFilter(tag)} className={cn("px-4 py-2 rounded-full text-sm font-medium transition-all", filter === tag ? "bg-cyan-500 text-slate-950" : "bg-slate-200 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-300 dark:border-slate-800")}>{tag}</button>
          ))}
        </motion.div>
        <div className="space-y-8">
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp} layout>
              <Card className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-grow space-y-6">
                    <div>
                      <div className="flex items-center gap-3 text-sm text-slate-500 font-mono mb-2"><span>{project.date}</span><span>•</span><span className="text-cyan-500">Case Study</span></div>
                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">{project.title}</h2>
                      <div className="flex flex-wrap gap-2 mb-6">{project.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}</div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2"><h4 className="text-sm font-bold text-slate-500 dark:text-slate-300 uppercase tracking-wider">The Challenge</h4><p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{project.challenge}</p></div>
                      <div className="space-y-2"><h4 className="text-sm font-bold text-slate-500 dark:text-slate-300 uppercase tracking-wider">The Solution</h4><p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{project.solution}</p></div>
                    </div>
                  </div>
                  <div className="md:w-64 flex-shrink-0 bg-slate-100 dark:bg-slate-950/50 rounded-lg p-6 border border-slate-200 dark:border-slate-800/50 flex flex-col justify-center"><h4 className="text-sm font-bold text-cyan-600 dark:text-cyan-400 mb-4 uppercase tracking-wider">Key Outcomes</h4><p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed">"{project.outcome}"</p></div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </PageShell>
  );
};

const AboutPage = () => (
  <PageShell className="container mx-auto px-4">
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-12">
      <div className="space-y-12">
        <motion.section variants={fadeInUp}>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">About Me</h1>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
            <p className="text-lg leading-relaxed mb-4">I am a Technology Enthusiast and System Administrator with extensive experience in modern IT infrastructure, cloud technologies, and Microsoft solutions.</p>
            <p className="leading-relaxed mb-4">I actively invest time in self-study, following official documentation, blogs, and technical courses to stay updated on Microsoft and cloud technologies.</p>
            <p className="leading-relaxed">In my free time, I improve my programming skills, mainly with JavaScript, PowerShell, and Python, using them to build scripts that automate routine tasks.</p>
          </div>
        </motion.section>
        <motion.section variants={fadeInUp}>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2"><Terminal size={20} className="text-cyan-500" /> Experience</h2>
          <div className="relative border-l border-slate-300 dark:border-slate-800 ml-3 space-y-12 pl-8 py-2">
            {EXPERIENCE.map((job) => (
              <div key={job.id} className="relative">
                <span className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-cyan-500" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.role}</h3>
                  <span className="text-sm font-mono text-slate-500 dark:text-slate-500">{job.period}</span>
                </div>
                <div className="text-cyan-600 dark:text-cyan-400 mb-4 font-medium">{job.company}</div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-slate-600 dark:text-slate-400 text-sm">{job.description.map((desc, i) => (<li key={i}>{desc}</li>))}</ul>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
      <div className="space-y-8">
        <motion.div variants={fadeInUp}>
          <Card className="p-6 sticky top-28"><h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Quick Actions</h3><div className="flex flex-col gap-3"><Button className="w-full gap-2 justify-center"><Download size={18} /> Download CV (PDF)</Button><Button variant="outline" className="w-full gap-2 justify-center"><Download size={18} /> One-Page Resume</Button></div></Card>
        </motion.div>
      </div>
    </motion.div>
  </PageShell>
);

const CertificationsPage = () => (
  <PageShell className="container mx-auto px-4">
    <motion.div initial="initial" animate="animate" variants={staggerContainer} className="max-w-4xl mx-auto">
      <motion.div variants={fadeInUp} className="mb-12"><h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Certifications</h1></motion.div>
      <div className="grid gap-6">
        {CERTIFICATIONS.map((cert, idx) => (
          <motion.div key={idx} variants={fadeInUp}>
            <Card className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4"><div className="h-12 w-12 rounded bg-slate-200 dark:bg-slate-800 flex items-center justify-center flex-shrink-0"><CheckCircle2 size={24} className={cert.status === 'Active' ? "text-green-500" : (cert.status === 'In Progress' ? "text-cyan-500" : "text-yellow-500")} /></div><div><h3 className="text-lg font-bold text-slate-900 dark:text-white">{cert.name}</h3><p className="text-sm text-slate-500">{cert.issuer} • {cert.date}</p></div></div>
              <Badge className={cn(cert.status === 'Active' ? "bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 border-green-200 dark:border-green-500/20" : cert.status === 'In Progress' ? "bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-500/20" : "bg-yellow-100 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-500/20")}>{cert.status}</Badge>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </PageShell>
);

const ContactPage = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); setFormState('submitting');
    setTimeout(() => setFormState('success'), 1000);
  };
  return (
    <PageShell className="container mx-auto px-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
        <div className="text-center mb-16"><h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Get in Touch</h1></div>
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-8 order-2 md:order-1">
            {formState === 'success' ? (
              <div className="text-center py-12"><div className="h-16 w-16 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mb-6 mx-auto"><CheckCircle2 size={32} /></div><h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Message Sent</h3><Button onClick={() => setFormState('idle')} variant="outline">Send another</Button></div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6"><div><label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Name</label><Input name="name" required placeholder="John Doe" /></div><div><label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Email</label><Input name="email" required type="email" placeholder="john@company.com" /></div><div><label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Message</label><Textarea name="message" required placeholder="How can I help you?" rows={5} /></div><Button type="submit" className="w-full gap-2" disabled={formState === 'submitting'}>{formState === 'submitting' ? 'Sending...' : (<>Send Message <Send size={16} /></>)}</Button></form>
            )}
          </Card>
          <div className="order-1 md:order-2 space-y-8"><div><h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Contact Info</h3><div className="space-y-4"><a href="mailto:ilirprevazi@gmail.com" className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-cyan-600"><div className="h-10 w-10 rounded bg-slate-100 dark:bg-slate-900 flex items-center justify-center border border-slate-200"><Mail size={18} /></div>ilirprevazi@gmail.com</a></div></div></div>
        </div>
      </motion.div>
    </PageShell>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-700 dark:selection:text-cyan-200 font-sans transition-colors duration-300">
          <Scanline />
          <Header />
          <main className="relative z-10"><Routes><Route path="/" element={<HomePage />} /><Route path="/services" element={<ServicesPage />} /><Route path="/projects" element={<ProjectsPage />} /><Route path="/about" element={<AboutPage />} /><Route path="/certifications" element={<CertificationsPage />} /><Route path="/tools" element={<FreeToolsPage />} /><Route path="/contact" element={<ContactPage />} /></Routes></main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
