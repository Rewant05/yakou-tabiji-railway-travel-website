import React from 'react';
import { siteMeta } from '../config/siteMeta';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="container">
        <h1 className="page-title">お問い合わせ</h1>
        
        <div className={styles.contactLayout}>
          <div className={styles.contactInfo}>
            <h2>ご連絡先</h2>
            <p>旅先情報に関するご質問、掲載・取材のご依頼などは、こちらのフォームまたはメールにてお問い合わせください。</p>
            
            <div className={styles.infoBlock}>
              <h3>メールアドレス</h3>
              <p><a href={`mailto:${siteMeta.email}`}>{siteMeta.email}</a></p>
            </div>
            
            <div className={styles.infoBlock}>
              <h3>営業時間</h3>
              <p>{siteMeta.businessHours}</p>
            </div>
            
            <div className={styles.infoBlock}>
              <h3>所在地</h3>
              <p>{siteMeta.address}</p>
            </div>
          </div>

          <div className={styles.formContainer}>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label htmlFor="name">お名前</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email">メールアドレス</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="inquiryType">お問い合わせ種別</label>
                <select id="inquiryType" name="inquiryType" required>
                  <option value="">選択してください</option>
                  <option value="travel_info">旅先情報について</option>
                  <option value="route_info">路線情報について</option>
                  <option value="press">掲載・取材について</option>
                  <option value="collab">コラボレーションについて</option>
                  <option value="other">その他</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">メッセージ</label>
                <textarea id="message" name="message" rows={6} required></textarea>
              </div>
              
              <p className={styles.privacyNote}>
                送信することで、<a href="/privacy-policy">プライバシーポリシー</a>に同意したものとみなされます。
              </p>
              
              <button type="submit" className={styles.submitBtn}>送信する</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
