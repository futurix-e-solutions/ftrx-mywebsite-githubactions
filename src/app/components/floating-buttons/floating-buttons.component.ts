import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTACT_INFO } from '../../constants/company.constants';

@Component({
  selector: 'app-floating-buttons',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="floating-buttons">
      <a [href]="contactInfo.whatsapp.link" target="_blank" class="btn btn-success rounded-circle whatsapp-btn"
         title="Chat on WhatsApp">
        <i class="fab fa-whatsapp fs-4"></i>
      </a>
      <a [href]="contactInfo.phone.dialLink" class="btn btn-primary rounded-circle call-btn mt-2"
         title="Call Now">
        <i class="fas fa-phone fs-5"></i>
      </a>
    </div>
  `,
  styles: [`
    .floating-buttons {
      position: fixed;
      bottom: 30px;
      right: 30px;
      z-index: 1000;
      display: flex;
      flex-direction: column;
    }
    
    .whatsapp-btn, .call-btn {
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transition: all 0.3s ease;
      animation: pulse 2s infinite;
    }
    
    .whatsapp-btn:hover, .call-btn:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
    
    @media (max-width: 768px) {
      .floating-buttons {
        bottom: 20px;
        right: 20px;
      }
      
      .whatsapp-btn, .call-btn {
        width: 50px;
        height: 50px;
      }
    }
  `]
})
export class FloatingButtonsComponent {
  contactInfo = CONTACT_INFO;
}